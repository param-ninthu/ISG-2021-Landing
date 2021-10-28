import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/scss/_timeline.scss';


const Timeline2 = () =>{

return( 

        <div className="timeline2"  style={{ background : 'black'}}>
            <div className="verticle1" >
            <VerticalTimeline >
                <VerticalTimelineElement
                    iconStyle={{ background: '#F36B30', color: '#fff' }}
                    icon={<i class="bi bi-x-diamond-fill"></i>}
                    />
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#fff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid #fff' }}
                        date="08.30 AM"
                        iconStyle={{ background: '#F36B30', color: '#fff' }}
                        icon={<i class="bi-alarm"></i>}
                    
                    >
                    <h5 className="vertical-timeline-element-title">Opening ceremony</h5>
            
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="08.45 AM"
                    iconStyle={{ background: '#F36B30', color: '#fff' }}
                    contentStyle={{ background: '#fff', color: '#fff' }}
                    icon={<i class="bi bi-table"></i>}
                    >
                    <h5 className="vertical-timeline-element-title">Address by representative from platinum partner</h5>
            
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="09.00 AM"
                    iconStyle={{ background: '#F36B30', color: '#fff' }}
                    contentStyle={{ background: '#fff', color: '#fff' }}
                    icon={<i class="bi bi-layers-half"></i>}
                    >
                    <h5 className="vertical-timeline-element-title">Address by representative from gold partner</h5>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="09.30 AM"
                    iconStyle={{ background: '#F36B30', color: '#fff' }}
                    contentStyle={{ background: '#fff', color: '#fff' }}
                    icon={<i class="bi bi-stickies"></i>}
                    >
                    <h5 className="vertical-timeline-element-title">Event commencement</h5>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="11.30 AM"
                    iconStyle={{ background: '#F36B30', color: '#fff' }}
                    contentStyle={{ background: '#fff', color: '#fff' }}
                    icon={<i class="bi bi-check-square"></i>}
                    >
                    <h5 className="vertical-timeline-element-title">Leader-board peek</h5>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="03.30 PM"
                    iconStyle={{ background: '#F36B30', color: '#fff' }}
                    contentStyle={{ background: '#fff', color: '#fff' }}
                    icon={<i class="bi bi-card-checklist"></i>}
                    >
                    <h5 className="vertical-timeline-element-title">Leader-board peek</h5>
            
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="05.30 PM"
                    iconStyle={{ background: '#F36B30', color: '#fff' }}
                    contentStyle={{ background: '#fff', color: '#fff' }}
                    icon={<i class="bi bi-front"></i>}
                    >
                    <h5 className="vertical-timeline-element-title">Event closes</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="06.00 PM"
                    iconStyle={{ background: '#F36B30', color: '#fff' }}
                    contentStyle={{ background: '#fff', color: '#fff' }}
                    icon={<i class="bi bi-award-fill"></i>}
                    >
                    <h5 className="vertical-timeline-element-title">Announce winners</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    iconStyle={{ background: '#F36B30', color: '#fff' }}
                    icon={<i class="bi bi-snow"></i>}
                    />
            </VerticalTimeline>
            
            </div>
        
        </div>    
    );

}
export default Timeline2;
