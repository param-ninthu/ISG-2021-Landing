import React from 'react';
import Timeline2 from './Timeline2';
import Timeline1 from './Timeline1';
import '../assets/scss/_timeline.scss';

class Timeline extends React.Component {
    
    state = {
        div1Shown: true,
        counter : 0,
        changeArrow: false,
      }
    
    
      handleButtonClick() {
        this.setState({
          div1Shown: (!this.state.div1Shown),
          counter :(!this.state.counter),
          changeArrow:(!this.state.changeArrow),
        });

       
         
      }
      Date(){
          const value = this.state.counter;
          return value?"DAY 2": "DAY 1";
      }
    
    render() {
        return (
           
            <section className="head" style={{ background : 'black'}}>
                <div className="head_title"> 
                    <div className="containers">
                        <div className="group">
                        <span className='bot' id="top"></span>
                        <div className="box">
                        <div className="item">{this.Date()}</div>
                        </div>
                        <span className='bot'  id="bottom"></span>
                        </div>
                    </div>
                    <div class="center-con">
                        <div class="round" 
                            onClick={() => this.handleButtonClick()} 
                            className={this.state.changeArrow? 'changeArrow': 'round'}
                        >
                            <div id="cta">
                                <span class="arrow primera next "></span>
                                <span class="arrow segunda next "></span>
                            </div>
                        </div>
                    </div>

                
                </div>
                <div className="timeline">
                    {
                    this.state.div1Shown ? 
                         (<Timeline1/>) 
                        : (<Timeline2/>)
                    }
                </div>
                
                
            </section>
        );
    }
}
export default Timeline;


