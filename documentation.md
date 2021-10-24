# React-slider-component
this is a react slider component...
to use this component you should follow this ex:
use the slider component and give it a slides props which you should give it an array of <Slide /> comonent:
      <Slider slides = {[array of <Slide/>]} />
      // the <Slide /> component must contain two props : 
      // 1. html : containes the jsx you want to display.
      // 2. sliderId : its the slider number .. starts form 1.
     ex : <Slider slides = {[
                  <Slide html = {<div>slide 1</div>} sliderId = {1} />,
                  <Slide html = {<div>slide 2</div>} sliderId = {1} />,
                  <Slide html = {<div>slide 3</div>} sliderId = {1} />,
                  <Slide html = {<div>slide 4</div>} sliderId = {1} />
                  ]} />
           // notice when you add another slider the number of sliders used become 2 => the second slider's id is 2 => you must wirte 2 in its slides
              sliderId prop  
           <Slider slides = {[
                  <Slide html = {<div>slide 1</div>} sliderId = {2} />,
                  <Slide html = {<div>slide 2</div>} sliderId = {2} />,
                  <Slide html = {<div>slide 3</div>} sliderId = {2} />,
                  <Slide html = {<div>slide 4</div>} sliderId = {2} />
                  ]} />
     
