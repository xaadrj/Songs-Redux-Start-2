import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song, favorite }) => {
  if (!song) {
    return <div>Select a Song</div>;
  }
  return (
    <div>
      <h3>Detail for :</h3>
      <p>
        Title : {song.title}
        <br />
        Duration : {song.duration}
      </p>
      {favorite === song.title ? <h5>Favorite Song</h5> : ''}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
    favorite : state.favoriteTitle
  };
};

export default connect(mapStateToProps)(SongDetail);
