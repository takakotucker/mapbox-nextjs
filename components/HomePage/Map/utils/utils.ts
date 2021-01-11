
import { Location } from '../Types';
import locations from '../../../../json/locations-list.js';

const chapters = locations;

export const getPopUpContent = (location: Location) => {
    const months_arr = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const { place_name, summary, date } = location
    const newDate = new Date(date*1000);
    const year = newDate.getFullYear();
    const month = months_arr[newDate.getMonth() + 1];
    const sanitisedDate = `${year} ${month}`;
    const popupHtml = `<h1 style="line-height: 25px">${place_name}</h1><p style="font-size: 15px">${summary}</p><p>Visited in ${sanitisedDate}</p></div>`;
    return popupHtml;
}

export const getChapterNamesObj = (): string[] => {
    let chaptersKeyList: string[] = [];
    Object.keys(chapters).map((chapter) => {
        chaptersKeyList.push(chapter)
    })

    return chaptersKeyList;

} 


