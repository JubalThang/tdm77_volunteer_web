

export default function Topbar({ currentUser }) {
  return (
    <div className={`w-screen h-20 bg-primary flex ${currentUser ? 'justify-between' : 'justify-center'} items-center px-5`} >
        <h1 className="font-bolx text-2xl text-white">TEDIM LAISIANGTHO VOLUNTEER</h1>
        {
            currentUser && <div className="flex space-x-5 text-white uppercase">
                <h1>UserName</h1> 
                <h1>Write</h1>
                <h1>Log Out</h1>
            </div>
        }
    </div>
  )
}
