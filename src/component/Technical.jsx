import Testimonial from './Testimonial';
import Social from './Social';
import Menu from './Menu';
import CopyRight from './CopyRight';
 function Technical(){
    return(
      <>
      <div className='my-1'>
        <Testimonial/>
      </div>
      <div className="technical flex flex-col my-1">
             <Social/>
             <Menu/>
             <CopyRight/>
      </div>
      </>
      
      
    );
  }
  export default Technical;