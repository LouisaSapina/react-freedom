import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const allPosts = [];

  const postsInfo = [
    {
      heading: "Heading 1",
      text: "Tesla is accelerating the world's transition to sustainable energy with electric cars",
    }, 
    {
      heading: "Heading 2",
      text: "We design sustainable systems that are massively scalable—resulting in the greatest environmental benefit possible.",
    },
    {
      heading: "Heading 3",
      text: "Our vehicles are some of the safest in the world. After safety, our goal is to make every Tesla the most fun you could possibly have in a vehicle. ",
    },
  ]

  postsInfo.forEach((posts) => {
    // console.log(posts.heading)
    allPosts.push(<Main head={posts.heading} info={posts.text}/>)
  });

  return (
    <div className="App">
      <Header />
      {allPosts}
      <Footer />
    </div>
  );
}

export default App;
