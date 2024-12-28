import Link from "next/link";

const getData = async () => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok){
        throw new Error ("failed to fetch data");
    }

    return response.json();
}


const Server =  async() => {
 const apiData = await getData();
 return (
    <div>
        <p className="text-3xl text-white text-center">  this is the data </p>
        {apiData.map((data) => (
          <div key={data.id} className="bg-gray-300 px-3 mx-4 rounded-md  mt-10" >
            <Link href={`/server/${data.id}`}> 
             <strong>{data.title}</strong> 
             <p>{data.body}</p> 
            </Link>
           
          </div>
        ))}
    </div>
 )
}


export default Server;