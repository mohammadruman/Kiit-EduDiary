
const Homepost = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
        {/* Left*/ }
        <div className="w-[35%] h-[200px] flex justify-center items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbnTZs4YLKIt3eAelwShiBMkZtyWELWzlDg&usqp=CAU" alt="" className="h-full w-full object-cover"/>
        </div>
  {/* right */}
  <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
  Lets Learn about React and Redux
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
       <p>@mohammadruman</p>
       <div className="flex space-x-2 text-sm">
       <p>28/11/2024</p>
       <p>16:32</p>
       </div>
       </div>
       <p className="text-sm md:text-lg">React Redux is a powerful library that helps manage application state in a predictable way. It’s an essential tool for complex React applications where multiple components need access to shared state or data.

</p>
</div>
    </div>
  )
}

export default Homepost