function App(){

    return(
        <div>
            <div id="nav--bar" className="w-100 shadow-2xl h-20 flex justify-between items-center">
                <div className="flex items-center justify-center justify-self-start select-none">
                <img src="/src/images/gdg.png" className="h-10 ml-5 w-20 "/>
                <p id="clg--name" className="ml-5 font-bold text-xl text-gray-500">GDSC GCOEN</p>
                </div>
                <ul id="nav--options" className="flex justify-center items-center text-xl font-bold text-gray-500 m-25 select-none">
                    <li className="ml-5 mr-10 hover:text-black hover:border-b-2 hover:border-gray-400">HOME</li>
                    <li className="ml-5 mr-10 hover:text-black hover:border-b-2 hover:border-gray-400">TEAM</li>
                    <li className="ml-5 mr-10 hover:text-black hover:border-b-2 hover:border-gray-400">PAST</li>
                    <li className="ml-5 mr-10 hover:text-black hover:border-b-2 hover:border-gray-400">CONTACT US</li>
                </ul>
                
            </div>
            <button className="bg-transparent rounded-[100px] h-20 w-10 z-50 absolute right-10 bottom-10 text-gray-500 border-gray-500 border-2 hover:border-black hover:bg-black hover:text-white hover:duration-300 duration-300 font-bold text-2xl select-none" >&#8679;</button>
        </div>
    )
}

export default App;