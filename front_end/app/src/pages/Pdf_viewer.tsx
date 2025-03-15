import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import pdf from '../assets/The Power of Habit.pdf';
//plug in to generate toolbar e
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Icon } from '@react-pdf-viewer/core';
// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';



export default function Pdf_viewer(){
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) =>
            defaultTabs.concat({
                content: <div className='bg-amber-100' style={{ textAlign: 'center', width: '100%' }}>Notes are listed here</div>,
                icon: (
                    <Icon size={16}>
                        <path d="M23.5,17a1,1,0,0,1-1,1h-11l-4,4V18h-6a1,1,0,0,1-1-1V3a1,1,0,0,1,1-1h21a1,1,0,0,1,1,1Z" />
                        <path d="M5.5 12L18.5 12" />
                        <path d="M5.5 7L18.5 7" />
                    </Icon>
                ),
                title: 'Notes',
            }),
    });
   return(
    <div > 
        <div id="main-bar" >
        <div className='bg-amber-50 rounded-3xl'>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div className='border border-black/30 h-[680px]'>
          <Viewer fileUrl={pdf} plugins={[defaultLayoutPluginInstance]} />
          </div>
       </Worker>
     </div>
        </div>
    </div>
   )
}






  