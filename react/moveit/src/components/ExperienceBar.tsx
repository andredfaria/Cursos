export function Experiencebar(){
  return(
    <header className="experience-bar">
      <span>0 xp</span>
      <div>
        <div style={{width: '68%'}}></div>  

        <span className='current-experience' style={{left: '50%'}}>300px</span>
      </div>
      <span>600 xp</span>
    </header>
  );
}