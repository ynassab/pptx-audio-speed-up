# pptx-audio-speed-up
With online school, lessons that are posted as PowerPoint presentations with audio voice-overs are paced too slowly for me, and jumping back and forth to repeat or skip over content is difficult with the PPTX UI. Converting the PPTX to a video file (and getting playback control in another software) would quickly consume my limited hardware memory, so I wrote a script to open the PPTX in my browser and give me full audio playback control.

## Instructions
1. Make a copy of the desired PPTX
2. Change the extension of the copy from ".pptx" to ".zip"
3. Extract the ZIP file
4. Copy speed_up.html and paste it into the new folder
5. Open speed_up.html

## Major Limitations
- The biggest current limitation is that there must be an audio file on every slide, or slides and audio will be out of sync
- Not every PPTX file stores its data the same way, and accessing the slides will not always work
