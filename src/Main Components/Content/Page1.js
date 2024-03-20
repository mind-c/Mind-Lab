import React, { useState, useEffect, useContext } from 'react';
import { CardDefault } from '../../General Components/Card';
import User from '../../General Components/Context';
import { Card } from '@material-tailwind/react';
import Youtube from '../../General Components/Youtube';

export default function Page1() {

  const [user, setUser] = useContext(User);

  const Item = (props) => {
    const [courses, setCourses] = useState([]);

    const [login, setLogin] = useState(false);


    useEffect(() => {
      if (user.login) {
        setLogin(true);
      }
    }, [user.login]);

    useEffect(() => {
      const dataSend = {
        interest: props.keyword || 'Computer Science',
      };

      if (login) {
        fetch('http://127.0.0.1:5000/courses', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataSend)
        })
          .then(response => response.json())
          .then(data => {
            if (data) {
              setCourses(data);
            }
          })
          .catch(error => console.error('Error fetching courses:', error));
      }
    }, [login]);

    const truncateDescription = description => {
      const words = description.split(' ');
      const truncated = words.slice(0, 20).join(' ');
      return truncated + (words.length > 50 ? '...' : '');
    };

    return (
      <div className='flex flex-wrap space-y-10 lg:space-y-0 md:space-y-0 '>
     {courses.slice(0, 6).map(course => (
    <CardDefault
      key={course.title}
      img={course.img}
      title={course.title}
      description={truncateDescription(course.description)}
      url={course.url}
    />
  ))}
      </div>
    );
  };
  const StepButton = (props) => {
    return (<>
      <details
        class="group border-s-4 my-5 border-[#28B889] bg-gray-50 p-3 [&_summary::-webkit-details-marker]:hidden"
      >
        <summary class="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 class="text-xl font-semibold text-gray-900">
            {props.title}
          </h2>

          <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p class="mt-4 leading-relaxed text-gray-700">
          <Item keyword={props.title} />
        </p>
      </details>


    </>)
  }

  const learningPath = user?.path?.["Learning path"] || [];
  return (
    <>{ !user.path?(<>
     <div id='content' className='bg-[#FFFFFF] w-full justify-start px-4 lg:px-32 lg:py-20 py-10 flex flex-col'>
        <h1 className='lg:text-4xl text-lg font-bold text-black mb-5'>Your Learning Path</h1>
        <div>
         <Item keyword={"Html"}/>
        </div>
      </div>
    </>):(<>
    
    <div id='content' className='bg-[#FFFFFF] w-full justify-start px-4 lg:px-32 lg:py-20 py-10 flex flex-col'>
        <h1 className='lg:text-4xl text-lg font-bold text-black mb-5'>Your Learning Path</h1>
        <div>
        <div>
        {learningPath.map((item, index) => (

        <StepButton title={item} key={index} />
      ))}
<h1 className='lg:text-4xl text-lg font-bold text-black my-10'>Recommendation for Youtube</h1>
{learningPath.map((item, index) => (

<Youtube title={item} key={index} />
))}
    </div>
         
        </div>
      </div>
    </>)}
    
    </>

  );
}


