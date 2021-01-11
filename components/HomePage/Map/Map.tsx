import React, { useState, useEffect, useRef, createRef } from 'react';
import ReactMapboxGl, { Marker, ZoomControl } from "react-mapbox-gl";
import s from './Map.scss';
import mapboxgl from 'mapbox-gl';
import { MAPBOX_TOKEN } from '../../../config/config';
import locations from '../../../json/locations-list.js';
import { getPopUpContent } from './utils/utils'
import { Location } from './Types';

interface LocationProps {
  id: string,
  title: any
}
interface Chapter {
  [key:string]: {
    place_name: string,
    types: string,
    summary: string,
    date: number,
    bearing: number,
    center: number[],
    zoom: number,
    pitch: number
  }
}

interface Map {
  map: any
}

const MapBox: any = ReactMapboxGl({
  accessToken: MAPBOX_TOKEN,
  scrollZoom: false, // disable scroll zoom
});

const chapters: Chapter = locations;
const mapStyle = "mapbox://styles/mapbox/light-v10";
const TOTAL_DATA_FEATURE: number = Object.keys(chapters).length - 1;

// sort chapters in alphabetical order
const sortedChaters: Chapter[] = Object.keys(chapters).sort().reduce(
  (obj: any, key: any) => { 
    obj[key] = chapters[key]; 
    return obj;
  }, 
  {}
);

const Map = () => {
  const [activeChapterName, setActiveChapterName] = useState(() => 'malaysia');
  const [selectedChapters, setSelectedChapters] = useState(sortedChaters);
  const mapRef: any = useRef(null);
  const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  // create refs for locations to get bounds
  const refs = useRef(Object.keys(selectedChapters).reduce((acc: any, value: any) => {
    acc[value] = createRef();
    return acc;
  }, {}));


  useEffect(() => {
    setSelectedChapters(sortedChaters)
    // const setActiveChapter = (chapterName) => {

    //   if (chapterName === activeChapterName) return;
    //   setTimeout(() => {
    //     mapRef.current.flyTo(selectedChapters[chapterName]);
    //   }, 10)

    //   refs.current[chapterName].current.classList.add('active');
    //   refs.current[activeChapterName].current.classList.remove('active');
    //   setActiveChapterName(chapterName);
    // }

    
  }, [activeChapterName]);

  const handleStyleLoad = (map: any) => {
    mapRef.current = map;
  }

  // Add popup when certain events are triggered
  const addPopup = (location: Location, map: any) => {
    const { center } = location;
    tooltipRef.current
    .setLngLat(center)
    .setHTML(getPopUpContent(location))
    .addTo(map);
  }

  // set Chapter name & show popup when center value is updated
  const onCenterChanged = (chapterName: any) => {
    const updatedChapterName: any = selectedChapters[chapterName];
    setTimeout(() => {
      mapRef.current.flyTo(updatedChapterName);
    }, 10)
    setActiveChapterName(chapterName);
    addPopup(updatedChapterName, mapRef.current)
  }

  const Location = React.forwardRef(({ id, title }: LocationProps, ref: any) => {
    return (
      <div className="location" ref={ref}>
        <h3><a href="#" id={id}  onClick={(e: any) => { 
          onCenterChanged(e.currentTarget.id)
          } }>{title}</a></h3>
      </div>
    );
  });

  // Get next index for next link
  const getNextIndex = () => Object.keys(selectedChapters).map((chapter, index) => {
    if (chapter === activeChapterName) {
      const nextChapter: any = (index === TOTAL_DATA_FEATURE) ? Object.keys(selectedChapters)[0] : Object.keys(chapters)[index+1];
      const updatedChapterName: any = selectedChapters[nextChapter];

      setActiveChapterName(nextChapter);
      setTimeout(() => {
        mapRef.current.flyTo(updatedChapterName);
        addPopup(updatedChapterName, mapRef.current)
      }, 10)
    }
  })

 // Get prev index for prev link
  const getPrevIndex = () => Object.keys(selectedChapters).map((chapter, index) => {
    if (chapter === activeChapterName) {
      const prevChapter: any = (index === 0) ? Object.keys(selectedChapters)[TOTAL_DATA_FEATURE] : Object.keys(chapters)[index-1];
      const updatedChapterName: any = selectedChapters[prevChapter];

      setActiveChapterName(prevChapter);
      setTimeout(() => {
        mapRef.current.flyTo(updatedChapterName);
        addPopup(updatedChapterName, mapRef.current)

      }, 10)
    }
  })

 const renderMarker = () => {
    Object.keys(selectedChapters).map((chapter: any, index) => {
      const center = selectedChapters[chapter].center.center;
       return ( 
        <Marker
          key={index}
          coordinates={center}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#008877',
              borderRadius: '50%',
            }}
        />
        </Marker>
      )
  });
 } 

  return (
    <div key={'map'}>
      <div className={s.MapWrapper}>
      <MapBox
        style={mapStyle}
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
        center={[113.265151, 2.720558]}
        className="test-map"
        onStyleLoad={handleStyleLoad}
        zoom={[1]}
      >
      <ZoomControl /> 
          {renderMarker}
      </MapBox>
      <div className={s.NavigationContainer}>
        <a className={s.NavigationItem} href="#" onClick={() => getPrevIndex()}>Prev</a>
        <a className={s.NavigationItem} href="#" onClick={() => getNextIndex()}>Next</a>
       </div>  
      <div className={s.LocatiionsListContainer}>
        <div className="features">
          {Object.keys(selectedChapters).map((chapter: any, index) => (
            <Location
              key={index}
              id={chapter}
              title={selectedChapters[chapter].place_name}
              ref={refs.current[chapter]}
            />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Map;