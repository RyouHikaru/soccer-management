import React from 'react';

const PlayerSingle = (props) => {
    return (
        <div className="row">
            <div className="col s12">
            <div className="card">
                <div className="card-image">
                <img src="soccer.jpg" alt="Soccer player" />
                <span className="card-title">{props.player.firstName} {props.player.lastName}</span>
                </div>
                <div className="card-content">
                    <p>Team: {props.player.team}</p>
                    <p>Email: {props.player.email}</p>
                    <p>Phone: {props.player.phone}</p>
                    <p>Coach: {props.player.isCoach}</p>
                    <p>Speed: {props.player.speed}</p>
                    <p>Strength: {props.player.strength}</p>
                    <p>Endurance: {props.player.endurance}</p>
                    <p>Ability: {props.player.ability}</p>
                    <p>Techniques: {props.player.techniques}</p>
                    <p>Tactical: {props.player.tactical}</p>
                </div>
                <div className="card-action">
                    Team: {props.player.team}
                </div>
            </div>
            </div>
      </div>
    );
}
 
export default PlayerSingle;