import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/scss/_timeline.scss';


const Timeline1 = () => {

    return (

        <div className="timeline" style={{background: 'black'}}>
            <div className="verticle1">

                <VerticalTimeline>
                    <VerticalTimelineElement
                        iconStyle={{background: '#F36B30', color: '#fff'}}
                        icon={<i className="bi bi-x-diamond-fill"/>}
                    />
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#fff', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid #fff'}}
                        date="09.00 AM"
                        iconStyle={{background: '#F36B30', color: '#fff'}}
                        icon={<i className="bi-alarm"/>}

                    >
                        <h5 className="vertical-timeline-element-title">Introduction by ISG</h5>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="09.10 AM"
                        iconStyle={{background: '#F36B30', color: '#fff'}}
                        contentStyle={{background: '#fff', color: '#fff'}}
                        icon={<i className="bi bi-table"/>}
                    >
                        <h5 className="vertical-timeline-element-title">Session by representative <br/>from platinum
                            partner</h5>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="09.50 AM"
                        iconStyle={{background: '#F36B30', color: '#fff'}}
                        contentStyle={{background: '#fff', color: '#fff'}}
                        icon={<i className="bi bi-layers-half"/>}
                    >
                        <h5 className="vertical-timeline-element-title">Session by representative <br/>from a knowledge
                            partner</h5>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="10.50 AM"
                        iconStyle={{background: '#F36B30', color: '#fff'}}
                        contentStyle={{background: '#fff', color: '#fff'}}
                        icon={<i className="bi bi-stickies"/>}
                    >
                        <h5 className="vertical-timeline-element-title">Session by representative<br/> from gold partner
                        </h5>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="11.20 AM"
                        iconStyle={{background: '#F36B30', color: '#fff'}}
                        contentStyle={{background: '#fff', color: '#fff'}}
                        icon={<i className="bi bi-bell-fill"/>}
                    >
                        <h5 className="vertical-timeline-element-title">Break</h5>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="11.30 AM"
                        iconStyle={{background: '#F36B30', color: '#fff'}}
                        contentStyle={{background: '#fff', color: '#fff'}}
                        icon={<i className="bi bi-list-stars"/>}
                    >
                        <h5 className="vertical-timeline-element-title">Session by representative<br/> from a knowledge
                            partner</h5>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="12.30 PM"
                        iconStyle={{background: '#F36B30', color: '#fff'}}
                        contentStyle={{background: '#fff', color: '#fff'}}
                        icon={<i className="bi bi-book-half"/>}
                    >
                        <h5 className="vertical-timeline-element-title">Session by representative<br/> from a knowledge
                            partner</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{background: '#F36B30', color: '#fff'}}
                        icon={<i className="bi bi-snow"/>}
                    />
                </VerticalTimeline>

            </div>

        </div>


    );

}
export default Timeline1;
