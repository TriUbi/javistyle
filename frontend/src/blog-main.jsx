import React from "react";
import { createRoot } from "react-dom/client";
import Blog from "./Blog.jsx";
import { articles } from "./data/articles.js";
import "./styles.css";

const slug = new URLSearchParams(window.location.search).get('articulo');
const article = articles.find((item) => item.slug === slug);
if (article) {
  document.title = `${article.title} · La Javi Paz`;
  document.querySelector('meta[name="description"]').content = article.excerpt;
}
createRoot(document.getElementById("root")).render(<React.StrictMode><Blog /></React.StrictMode>);
