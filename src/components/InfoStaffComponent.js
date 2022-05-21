import React from 'react';
import { Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';



function RenderInfoStaff({staff}) {
    return(
        <Media tag="li">
            <Media left middle>
                <Media object src={ staff.image} alt={staff.name} />
            </Media>
            <Media body className="ml-5">
                <Media heading>{staff.name}</Media>
                <p>{staff.designation}</p>
                <p>{staff.description}</p>
            </Media>
        </Media>
    );

}

function InfoStaff(props) {

    const staffs = props.staffs.staffs.map((staff) => {
        return (
            <Fade in key={staff.id}>
                <div className="col-12 mt-2">
                        <RenderInfoStaff staff={staff} />
                </div>
            </Fade>
        );
    });

        return (
            <Media list>
                <Stagger in>
                    {staffs}
                </Stagger>
            </Media>
        );
    }


function Info(props) {

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Info Staffs</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Info Staffs</h3>
                    <hr />
                </div>                
            </div>
            
        
            <div className="row row-content">
                <InfoStaff leaders={props.leaders} />
            </div>
        </div>
    );
}


export default Info;    