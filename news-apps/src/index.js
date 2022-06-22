import React from "react";
import { createRoot } from "react-dom/client";

const News = () => {
  // data news
  const someNews = [
    {
      title: "CNN Acuire BEME",
      date: "March 20 2022",
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: "https://source.unsplash.com/user/erondu/600x400",
      category: "News",
      link: "#",
    },
    {
      title: "React and the WP-API",
      date: "March 19 2022",
      content: "The first ever decoupled starter theme for React & the WP-API.",
      image: "https://source.unsplash.com/user/ilyapavlov/600x400",
      category: "News",
      link: "#",
    },
    {
      title: "Nomad Lifestyle",
      date: "March 19 2022",
      content: "Learn our tips and tricks on living a nomadic lifestyle.",
      image: "https://source.unsplash.com/user/erondu/600x400",
      category: "Travel",
      link: "#",
    },
  ];

  return (
    <div>
      <Header title="Latens News" subtitle="News Update 2022" />
      {someNews.map((news) => (
        <Card key={news} {...news} />
      ))}
    </div>
  );
};
const Header = ({ title, subtitle }) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};
const Card = ({ image, category, date, title, content, link }) => {
  return (
    <article>
      <CardHeader image={image} category={category} title={title} />
      <CardBody date={date} title={title} content={content} link={link} />
    </article>
  );
};
const CardHeader = ({ image, category, title }) => {
  return (
    <header>
      <h4>{category}</h4>
      <img src={image} alt={title} />
    </header>
  );
};
const CardBody = ({ date, title, content, link }) => {
  return (
    <div>
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
};
const Button = ({ link }) => {
  return <a href={link}>Find Out More</a>;
};

const root = createRoot(document.getElementById("root"));
root.render(<News />);
