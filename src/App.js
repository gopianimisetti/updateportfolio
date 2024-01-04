
import './App.css';
import Gopi from "./gopi.jpg";
import Resume from "./Resume.pdf";


function App() {
  return (
    <div className="body">
      <div className='main'>
        <div className='header'>
        <img src={Gopi} alt="profilepic" className='profilepic'/><br/>
        <h1 className='name'>ANIMISETTI NAGAGOPI</h1>
        <p>FrontEnd Developer</p>
        <p>Mobile: 7382664563</p>
        <p>E-mail: animigopi3@gmail.com</p>
        <p>Hyderabad/Telangana</p><br/>

        <a href={Resume} target='download'>My Resume</a>
        <a  href='https://github.com/gopianimisetti' target='_blank'>My Github Account</a>
        <a  href='https://www.linkedin.com/in/nagagopi-animisetti-087509285/' target='_blank'>My Linkdin Account</a>
        </div><br/><hr/>

       <center><h3>My Projects:</h3></center> 
        <div className='grid'>
            <div className="gridcell">
              <center><h3>TodoList</h3></center>
              <p>The Todo list project is a basic web application built with React.js that enables users to manage
their daily tasks by adding, deleting, editing and marking tasks as completed. The user interface
will consist of an input field to add new tasks, a list to display existing tasks, and buttons to mark
tasks as completed or delete them</p>
              <a href="https://gopianimisetti.github.io/todolist" target='_blank'>Click To Open project</a>
              </div>       

             
              <div className="gridcell">
              <center><h3>weatherApp</h3></center>
              <p>The Weather App is a web application that allows users to check the current weather conditions of
a specific location. Users can enter a city name or zip code in the search bar, and the app fetches
weather data from a weather API and displays the relevant weather information.</p>
              <a href="https://gopianimisetti.github.io/weatherapps" target='_blank'>Click To Open project</a>
              </div> 


               <div className="gridcell">
               <center><h3>Landingpage</h3></center>
              <p>A landing page is a single web page designed to capture the attention of visitors and encourage
 them to take a specific action, such as signing up for a service, downloading an app, or purchasing
a product. In the context of React.js, building a landing page involves creating a single-page
application (SPA) that showcases the product, service, or brand with an attractive and engaging
user interface</p>
              <a href="https://gopianimisetti.github.io/landingpage" target='_blank'>Click To Open project</a>
              </div> 


              <div className="gridcell">
              <center><h3>E-Prathibha</h3></center>
              <p>The E-Prathibha project provides students with access to previous question papers from previous
years. This allows students to practice answering questions in the same format as the actual exam.
Solving previous year's question papers helps students understand the question pattern and
concepts. It also helps them identify areas where they need more practice. By practicing previous
year's question papers, students can improve their speed and accuracy.</p>
              <a href="https://gopianimisetti.github.io/e-prathibha" target='_blank'>Click To Open project</a>
              </div>     
        </div>
      </div>
      
    </div>
  );
}

export default App;


