'use strict';

const os = require( 'os' );
const path = require( 'path' );
const fs = require( 'fs' );
const  OBSWebSocket = require('obs-websocket-js');

const obs = new OBSWebSocket();
obs.connect({
        address: 'localhost:5555',
        password: 'vb'
    })
    .then(() => {
        console.log(`Success! We're connected & authenticated.`);

        return obs.send('GetVolume', {source : "Mic/Aux", useDecibel : true });
    }).then(data => {
            console.log(`Stream status!`);
            console.log(data)
    })
    // .then(data => {
    //     console.log(`${data.scenes.length} Available Scenes!`);

    //     data.scenes.forEach(scene => {
    //         if (scene.name !== data.currentScene) {
    //             console.log(`Found a different scene! Switching to Scene: ${scene.name}`);

    //             obs.send('SetCurrentScene', {
    //                 'scene-name': scene.name
    //             });
    //         }
    //     });
    // })
    .catch(err => { // Promise convention dicates you have a catch on every chain.
        console.log(err);
    });

// recording listeners
obs.on('RecordingStarted', data => {
    console.log(`Recording started: ${data}`);
})

obs.on('RecordingStopped', data => {
    console.log(`Recording stopped: ${data}`);
})

// streaming listeners
obs.on('StreamStarting', data => {
    console.log(`Stream starting: ${data}`);
})

obs.on('StreamStarted', (data) => {
    console.log(`Stream started: ${data}`);
});

obs.on('StreamStopping', (data) => {
    console.log(`Stream Stopping: ${data}`);
});

obs.on('StreamStopped', (data) => {
    console.log(`Stream Stopped: ${data}`);
});

// You must add this handler to avoid uncaught exceptions.
obs.on('error', err => {
    console.error('socket error:', err);
});