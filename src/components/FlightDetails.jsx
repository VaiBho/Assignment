import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "./Common/Icons";
import Rupee from "./Common/Rupee";

const InfoLight = styled.span`
    margin-right: 8px;
    font-size: 14px;
    color: #777;
`;

const Button = styled.button`
    margin-top: 20px;
`;

const InfoBlue = styled.div`
    color: #668cff;
`;

const FlightDetails = ({ details }) => (
    <div className="card" style={{ marginTop: 12 }}>
        <div className="card-body">
            <div className="row">
                <div className="col-3">
                    <h5 className="card-title">
                        <Rupee amount={details.fare} />
                    </h5>
                    {details.flight_id}
                </div>

                <div className="col-7">
                    <InfoBlue>
                        <Icon icon="fa-map-marker-alt" />
                        From: <b>{details.source_code}</b> to:{" "}
                        <b>{details.destination_code}</b>
                    </InfoBlue>

                    <div style={{ marginTop: 12 }}>
                        <InfoLight>
                            <Icon icon="fa-plane-departure" size={12} />
                            Depart: {details.departs_at}{" "}
                        </InfoLight>
                        <InfoLight>
                            <Icon icon="fa-plane-arrival" size={13} />
                            Arrive: {details.arrives_at}
                        </InfoLight>
                    </div>
                </div>

                <div className="col-2">
                    <Button className="btn btn-sm btn-light">SELECT</Button>
                </div>
            </div>
        </div>
    </div>
);

FlightDetails.propTypes = {
    details: PropTypes.object.isRequired
};

export default FlightDetails;
