import image from '../Assets/img/bg01.JPG'
import CodeOffIcon from '@mui/icons-material/CodeOff';
import CodeIcon from '@mui/icons-material/Code';
function Banner(){
    return(
      <div className="relative">
        
           <div>
           <img className="object-cover opacity-20 z-0 photo my-2" src={image} alt="not loaded yet"/>
           </div>
         <div className="absolute z-10 text-lg inset-y-0 left-44 text-center flex flex-col items-center justify-center">
              <h1 className="text-bold tracking-wide  text-4xl font-bold text-center py-2 truncate pb-4">Rishav Mishra</h1>
          
              <p className="text-2xl" > I AM <span className="underline decoration-amber-600 decoration-4 ">DEVELOPER <CodeOffIcon/></span></p>
        </div>
      </div>
     
      
    );
  }
  export default Banner;