import React from 'react'

const Blog = () => {
  return (
    <div>Question and Answers
        <h2>1. How will you improve the performance of a React Application?</h2> <br />
        <h2>ans:Memoizing React components to prevent unnecessary re-renders.Code-splitting in React using dynamic import(),Windowing or list virtualization in React.</h2>
        <h2>2. What are the different ways to manage a state in a React application?  <br />
        <h2>ans:Local state. Global state. Server state. URL state.</h2>
        <h2>3. How does prototypical inheritance work?</h2> <br />
        <h2>ans: It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.</h2>
        <h2>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
        <h2>ans: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.</h2>
        <h2>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2> <br />
        <h2>ans:by declaring state and loop through all objects</h2>
  </h2>
    </div>
    
  )
}

export default Blog