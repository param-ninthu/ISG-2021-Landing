import React from 'react';
import Timeline2 from './Timeline2';
import Timeline1 from './Timeline1';
import '../assets/scss/_timeline.scss';
import Nav from 'react-bootstrap/Nav';

class Timeline extends React.Component {
    
    state = {
        div1Shown: true,
        div2Shown: false,

      }
    
      handleButtonClick() {
        this.setState({
          div1Shown: true,
          div2Shown: false,


        });

       
         
      }
      handleButtonClick2(){
          this.setState({
              div2shown:true,
              div1Shown:false,
          })
      }
    
    render() {
        return (
           
            <section className="head" style={{ background : 'black'}}>
                 <div className="head_title"> 
                    <Nav variant="pills" defaultActiveKey={1}  >
                    <Nav.Item >
                    <Nav.Link eventKey={1} onClick={() => this.handleButtonClick()}>
                        <div className="containers" id="#target" >
                            <div className="group">
                            <span className='bot' id="top"></span>
                            <div className="box">
                            <div className="item">DAY 1</div>
                            </div>
                            <span className='bot'  id="bottom"></span>
                            </div>
                        </div>
                        </Nav.Link>
                
       
                    </Nav.Item>
                    <Nav.Item >
                    <Nav.Link eventKey={2} onClick={() => this.handleButtonClick2()}>
                        <div className="containers">
                            <div className="group">
                            <span className='bot' id="top"></span>
                            <div className="box">
                            <div className="item">DAY 2</div>
                            </div>
                            <span className='bot'  id="bottom"></span>
                            </div>
                        </div>
                    </Nav.Link>
                
                    </Nav.Item>
                    
                    </Nav>
                </div>
      
                <div className="timeline">
                    {
                    this.state.div1Shown ? 
                         (<Timeline1/>) 
                        :(<Timeline2/>) 
                    }
                </div>
                
                
            </section>
        );
    }
}

export default Timeline;


