import React from 'react';
import './sliderComponent.css';

let sliderId = 1;
let slidesWrapperArray = [];
let slidesArray = [];
let sliders = [];

class Slider extends React.Component {

    slidesWrapperCounter = 0;
    
    x = 0;
    
    mainSliderCounter = 0;

    resize = () => {

        this.slidesWrapper.setState({

            style : {

                transform : 'translateX(' + (-window.innerWidth * (this.mainSliderCounter)) + 'px)',

                width: (window.innerWidth * this.slidesWrapperCounter) + "px"

            }

        });

        this.x = (-window.innerWidth * (this.mainSliderCounter))

    }

    componentDidMount() {

        this.sliderId = sliderId;
        
        sliderId++

        this.slidesWrapper = slidesWrapperArray[this.sliderId];

    }

    left = () => {

        this.mainSliderCounter -= 1;

        if (this.mainSliderCounter < 0) {

            this.mainSliderCounter = 0;

        } else {

            this.x += window.innerWidth;

            this.slidesWrapper.setState({

                style : {

                    transform : "translateX(" + this.x + "px)",

                    width : (window.innerWidth * this.slidesWrapper.counter) + "px"

                }

            })
            
        }

    };

    right = () => {

        this.mainSliderCounter += 1;

        if (this.mainSliderCounter >= this.slidesWrapperCounter) {

            this.mainSliderCounter = this.slidesWrapperCounter - 1;

        } else {

            this.x -= window.innerWidth;

            this.slidesWrapper.setState({

                style : {

                    transform : "translateX(" + this.x + "px)",
                    
                    width : (window.innerWidth * this.slidesWrapper.counter) + "px"

                }

            });
            
        }

    };

    render() {
        if((sliders.indexOf(this) > -1) === false) {
            sliders.push(this);
        }
        this.slides = this.props.slides.map((slide)=>{
            return <div key={Math.random()}>{slide}</div>
        })
        return (
            <div className="slider">
                
                <SlidesWrapper slides={this.slides}/>

                <div className="left" onClick={this.left}></div>
                <div className="right" onClick={this.right}></div>

            </div>
        )
    }
}

class SlidesWrapper extends React.Component {
    state = {
        style : {
            width : (window.innerWidth * this.counter) + "px"
        }
    }

    counter = 0;

    sliderId = sliderId;

    componentDidMount() {

        this.setState({
            style : {
                width : (window.innerWidth * this.counter) + "px"
            }
        })
    };

    render() {
        if ((slidesWrapperArray.indexOf(this) > -1) === false) {
            this.slider = sliders[this.sliderId];
            slidesWrapperArray.push(this);
        }
        return (
        <div className="slidesWrapper" style={this.state.style} id={'slidesWrapper' + this.props.id}>
            {this.props.slides}
        </div>
        )
    }
}

class Slide extends React.Component {
    
    state = {
        width : window.innerWidth + "px"
    }

    sliderId = this.props.sliderId;

    componentDidMount() { 

        this.slidesWrapper = slidesWrapperArray[this.sliderId];

        this.slider = sliders[this.sliderId];

        this.slidesWrapper.counter += 1;

        this.slider.slidesWrapperCounter += 1;
        
        this.slidesWrapper.componentDidMount();

        slidesArray.push(this);

    }

    resize() {
        this.setState({
            width : window.innerWidth + "px"
        })
    }

    render() {
        return <div className="slide" style={this.state}>{this.props.html}</div>
    }
}


window.onresize = () => {
    sliders.forEach((item) => {
        item.resize();
        console.log(item)
    });
    slidesArray.forEach((item) => {
        item.resize()
    });
    
}

export default Slider;
export {Slide};
