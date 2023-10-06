import './App.css';
import React, { useEffect } from 'react'

function App() {
// Creates a function to play audio according to their specific id.
  const playAudio = (id) => {
    // Grabs element by their identifier
    const audio = document.getElementById(id);
    // Resets the audio to start at 0 whenever pressed
    audio.currentTime = 0;
    // Plays audio
    audio.play();
    
  }

// Creates a function to handle when the keyboard is pressed, this takes in event or e as a parameter
// eslint-disable-next-line
  const handleKeydown = (e) => {
    //preventing the event from defaulting
    e.preventDefault(); 
    // The switch is the keys pressed. We put it to uppercase so the switch will read the cases which are in uppercase.
    switch (e.key.toUpperCase()) {
      case 'Q':
        playAudio(e.key.toUpperCase());
        // Forces the html inside the display div to be equal to the id or the instrument played.
        document.getElementById('display').innerHTML = "Heater 1";
        break;
      case 'W':
        playAudio(e.key.toUpperCase());
        document.getElementById('display').innerHTML = "Heater 2";
        break;
      case 'E':
        playAudio(e.key.toUpperCase());
        document.getElementById('display').innerHTML = "Heater 3";
        break;
      case 'A':
        playAudio(e.key.toUpperCase());
        document.getElementById('display').innerHTML = "Heater 4";
        break;
      case 'S':
        playAudio(e.key.toUpperCase());
        document.getElementById('display').innerHTML = "Clap";
        break;
      case 'D':
        playAudio(e.key.toUpperCase());
        document.getElementById('display').innerHTML = "Open HH";
        break;
      case 'Z':
        playAudio(e.key.toUpperCase());
        document.getElementById('display').innerHTML = "Kick n Hat";
        break;
      case 'X':
        playAudio(e.key.toUpperCase());
        document.getElementById('display').innerHTML = "Kick";
        break;
      case 'C':
        playAudio(e.key.toUpperCase());
        document.getElementById('display').innerHTML = "Closed HH";
        break;
      default:
        return;
    }
  }

  // {useEffect} is a hook that allows us to use the side effects in our components. for example, fetching data, updating the DOM,
  // For more info, visit https://react.dev/reference/react/useEffect
  
  //useEffect for keydown events
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      }
  }, [handleKeydown]);

  //useEffect for button click events
  useEffect(() => {
      document.getElementById("heater-1").addEventListener('click', () => {
        const audio = document.getElementById('Q');
        audio.currentTime = 0;
        audio.play();
        document.getElementById('display').innerHTML = 'Heater 1';
      })
      document.getElementById("heater-2").addEventListener('click', () => {
        const audio = document.getElementById('W');
        audio.currentTime = 0;
        audio.play();
        document.getElementById('display').innerHTML = 'Heater 2';
      })
      document.getElementById("heater-3").addEventListener('click', () => {
        const audio = document.getElementById('E');
        audio.currentTime = 0;
        audio.play();
        document.getElementById('display').innerHTML = 'Heater 3';
      })
      document.getElementById("heater-4").addEventListener('click', () => {
        const audio = document.getElementById('A');
        audio.currentTime = 0;
        audio.play();
        document.getElementById('display').innerHTML = 'Heater 4';
      })
      document.getElementById("clap").addEventListener('click', () => {
        const audio = document.getElementById('S');
        audio.currentTime = 0;
        audio.play();
        document.getElementById('display').innerHTML = 'Clap';
      })
      document.getElementById("open-hh").addEventListener('click', () => {
        const audio = document.getElementById('D');
        audio.currentTime = 0;
        audio.play();
        document.getElementById('display').innerHTML = 'Open HH';
      })
      document.getElementById("kick-n-hat").addEventListener('click', () => {
        const audio = document.getElementById('Z');
        audio.currentTime = 0;
        audio.play();
        document.getElementById('display').innerHTML = 'Kick n Hat';
      })
      document.getElementById("kick").addEventListener('click', () => {
        const audio = document.getElementById('X');
        audio.currentTime = 0;
        audio.play();
        document.getElementById('display').innerHTML = 'Kick';
      })
      document.getElementById("closed-hh").addEventListener('click', () => {
        const audio = document.getElementById('C');
        audio.currentTime = 0;
        audio.play();
        document.getElementById('display').innerHTML = 'Closed HH';
      })
    
      return () => {
        document.getElementById("heater-1").removeEventListener('click', () => {
          const audio = document.getElementById('Q');
          audio.currentTime = 0;
          audio.play();
          document.getElementById('display').innerHTML = 'Heater 1';
        })
        document.getElementById("heater-2").removeEventListener('click', () => {
          const audio = document.getElementById('W');
          audio.currentTime = 0;
          audio.play();
          document.getElementById('display').innerHTML = 'Heater 2';
        })
        document.getElementById("heater-3").removeEventListener('click', () => {
          const audio = document.getElementById('E');
          audio.currentTime = 0;
          audio.play();
          document.getElementById('display').innerHTML = 'Heater 3';
        })
        document.getElementById("heater-4").removeEventListener('click', () => {
          const audio = document.getElementById('A');
          audio.currentTime = 0;
          audio.play();
          document.getElementById('display').innerHTML = 'Heater 4';
        })
        document.getElementById("clap").removeEventListener('click', () => {
          const audio = document.getElementById('S');
          audio.currentTime = 0;
          audio.play();
          document.getElementById('display').innerHTML = 'Clap';
        })
        document.getElementById("open-hh").removeEventListener('click', () => {
          const audio = document.getElementById('D');
          audio.currentTime = 0;
          audio.play();
          document.getElementById('display').innerHTML = 'Open HH';
        })
        document.getElementById("kick-n-hat").removeEventListener('click', () => {
          const audio = document.getElementById('Z');
          audio.currentTime = 0;
          audio.play();
          document.getElementById('display').innerHTML = 'Kick n Hat';
        })
        document.getElementById("kick").removeEventListener('click', () => {
          const audio = document.getElementById('X');
          audio.currentTime = 0;
          audio.play();
          document.getElementById('display').innerHTML = 'Kick';
        })
        document.getElementById("closed-hh").removeEventListener('click', () => {
          const audio = document.getElementById('C');
          audio.currentTime = 0;
          audio.play();
          document.getElementById('display').innerHTML = 'Closed HH';
        })
      }
    } , [])


  return (
    <div id="drum-machine">
      <div id="display">
        {/* Initial text on the display before changing using buttons */}
      Press keyboard buttons to play...
      </div>

      <div id="drum-container">
        <div id="heater-1" className="drum-pad">
          <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" preload='auto'></audio>
          Q
        </div>

        <div id="heater-2" className="drum-pad">
          <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" preload='auto'></audio>
          W
        </div>

        <div id="heater-3" className="drum-pad">
          <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" preload='auto'></audio>
          E
        </div>

        <div id="heater-4" className="drum-pad">
          <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" preload='auto'></audio>
          A
        </div>

        <div id="clap" className="drum-pad">
          <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" preload='auto'></audio>
          S
        </div>

        <div id="open-hh" className="drum-pad">
          <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" preload='auto'></audio>
          D
        </div>

        <div id="kick-n-hat" className="drum-pad">
          <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" preload='auto'></audio>
          Z
        </div>

        <div id="kick" className="drum-pad">
          <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" preload='auto'></audio>
          X
        </div>

        <div id="closed-hh" className="drum-pad">
          <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" preload='auto'></audio>
          C
        </div>
    </div>
    <div className='footer'>
      <p>Made by <a href="https://github.com/gvc222">Boinkie</a></p>
      <p><a href="https://www.linkedin.com/in/giannacalderon/">LinkedIn</a></p>
    </div>
    </div>
  );
}

export default App;
