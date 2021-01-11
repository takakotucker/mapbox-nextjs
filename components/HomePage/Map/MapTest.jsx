import React, { useState, useEffect, useRef, createRef, useReducer } from 'react';
import ReactMapboxGl, { Marker, ZoomControl } from "react-mapbox-gl";
import s from './Map.scss';
import mapboxgl from 'mapbox-gl';
import { MAPBOX_TOKEN } from '../../../config/config';
import locations from '../../../json/locations-list.js';
import Button from '../Button/Button'
import { getPopUpContent } from './utils/utils'

const MapBox = ReactMapboxGl({
  accessToken: MAPBOX_TOKEN,
  scrollZoom: false, // disable scroll zoom
});

const chapters = locations;
const mapStyle = "mapbox://styles/mapbox/light-v10";
const TOTAL_DATA_CHAPTERS = Object.keys(chapters).length;
const TOTAL_DATA_FEATURE = Object.keys(chapters).length - 1;

const MapTest = () => {
  const [activeChapterName, setActiveChapterName] = useState('malaysia');
  const [selectedChapter, setSelectedChapter] = useState('malaysia');
  const [selectedChapters, setSelectedChapters] = useState(chapters);

  const mapRef = useRef();
  const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  // create refs for locations to get bounds
  const refs = useRef(Object.keys(selectedChapters).reduce((acc, value) => {
    acc[value] = createRef();
    return acc;
  }, {}));


  useEffect(() => {

    const setActiveChapter = () => {

      if (selectedChapter === activeChapterName) {
        return;
      }

      setTimeout(() => {
        mapRef.current.flyTo(chapters[selectedChapter]);
      }, 10)

      refs.current[selectedChapter].current.classList.add('active');
      refs.current[activeChapterName].current.classList.remove('active');
      
      setActiveChapterName(selectedChapter);

    }

    const chapterNames = Object.keys(chapters);


    for (let i = 0, len = chapterNames.length; i < len; i++) {
      console.log(len, chapterNames);
      let chapterName = chapterNames[i];
        setActiveChapter(chapterName);
        break;

    }

  }, [selectedChapter, activeChapterName]);

  const handleStyleLoad = (map) => {
    mapRef.current = map;
  }

  // Add popup when certain events are triggered
  const addPopup = (location, map) => {
    const { center } = location;
    tooltipRef.current
    .setLngLat(center)
    .setHTML(getPopUpContent(location))
    .addTo(map);
  }

  // set Chapter name & show popup when center value is updated
  const onCenterChanged = (chapterName) => {
    setSelectedChapter(chapterName);
    addPopup(selectedChapters[chapterName], mapRef.current)
  }

  const Location = React.forwardRef(({ id, title }, ref) => {
    return (
      <div className="location" ref={ref}>
        <h3><a href="#" id={id}  onClick={(e) => { 
          onCenterChanged(e.currentTarget.id)
          } }>{title}</a></h3>
      </div>
    );
  });

  const filterObject = (value) => {
    const filteredObj = {};
    const filterSelection = Object.keys(selectedChapters).filter(item => item.types === value);

    const res = selectedChapters.filter(item => filterSelection.includes( item.types ) );
    
    return filterObject(res);
}

  const onClickFilter = (value) => {
    const data = filterObject(value);
    setSelectedChapters(data);
  }


  // Get next index for next link
  const getNextIndex = () => Object.keys(selectedChapters).map((chapter, index) => {
    if (chapter === activeChapterName) {
      const nextChapter = (index === TOTAL_DATA_FEATURE) ? Object.keys(selectedChapters)[0] : Object.keys(chapters)[index+1];
      setSelectedChapter(nextChapter);
      setTimeout(() => {
        addPopup(selectedChapters[nextChapter], mapRef.current)
      }, 200)
    }
  })

 // Get prev index for prev link
  const getPrevIndex = () => Object.keys(selectedChapters).map((chapter, index) => {
    if (chapter === activeChapterName) {
      const prevChapter = (index === 0) ? Object.keys(selectedChapters)[TOTAL_DATA_FEATURE] : Object.keys(chapters)[index-1];
      setSelectedChapter(prevChapter);
      setTimeout(() => {
        addPopup(selectedChapters[prevChapter], mapRef.current)
      }, 200)
    }
  })

  const nextButtonProps = {
    text: 'Next',
    type: 'next',
    getIndex: ('next') 
  }


  return (
    <div key={'map'}>
    <div className={s.MapWrapper}>
    <div id="map"></div>
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
          {Object.keys(selectedChapters).map((chapter, index) => (
           <>
            <Marker
              key={index}
              coordinates={selectedChapters[chapter].center}
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
         </>
        ))}
      </MapBox>
      <div className={s.NavigationContainer}>
        <a className={s.NavigationItem} href="#" onClick={() => getPrevIndex()}>Prev</a>
        <a className={s.NavigationItem} href="#" onClick={() => getNextIndex()}>Next</a>
       </div>  
      <div className={s.LocatiionsListContainer}>
        <div className="features">
          {Object.keys(selectedChapters).map((chapter, index) => (
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
export default MapTest; 