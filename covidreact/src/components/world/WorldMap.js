import React, { Component } from 'react'
// import './App.css'
// import worlddata from './world'
import { geoMercator, geoPath } from 'd3-geo'



class WorldMap extends Component {
   render() {
      const worlddata = [
        {
        "coordinates": {
        "latitude": 33,
        "longitude": 65
        },
        "name": "Afghanistan",
        "code": "AF",
        "population": 29121286,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 5,
        "confirmed": 369
        },
        "latest_data": {
        "deaths": 120,
        "confirmed": 4402,
        "recovered": 558,
        "critical": 7,
        "calculated": {
        "death_rate": 2.7260336210813265,
        "recovery_rate": 12.676056338028168,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 113
        }
        }
        },
        {
        "coordinates": {
        "latitude": 41,
        "longitude": 20
        },
        "name": "Albania",
        "code": "AL",
        "population": 2986952,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 12
        },
        "latest_data": {
        "deaths": 31,
        "confirmed": 868,
        "recovered": 650,
        "critical": 7,
        "calculated": {
        "death_rate": 3.571428571428571,
        "recovery_rate": 74.88479262672811,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 302
        }
        }
        },
        {
        "coordinates": {
        "latitude": 0,
        "longitude": 0
        },
        "name": "Åland Islands",
        "code": "AX",
        "population": 26711,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 0,
        "confirmed": 0,
        "recovered": 0,
        "critical": 0,
        "calculated": {
        "death_rate": null,
        "recovery_rate": null,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 0
        }
        }
        },
        {
        "coordinates": {
        "latitude": 0,
        "longitude": 0
        },
        "name": "American Samoa",
        "code": "AS",
        "population": 57881,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 0,
        "confirmed": 0,
        "recovered": 0,
        "critical": 0,
        "calculated": {
        "death_rate": null,
        "recovery_rate": null,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 0
        }
        }
        },
        {
        "coordinates": {
        "latitude": 28,
        "longitude": 3
        },
        "name": "Algeria",
        "code": "DZ",
        "population": 34586184,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 494,
        "confirmed": 5558,
        "recovered": 2546,
        "critical": 22,
        "calculated": {
        "death_rate": 8.888089240734077,
        "recovery_rate": 45.807844548398705,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 127
        }
        }
        },
        {
        "coordinates": {
        "latitude": 42.5,
        "longitude": 1.6
        },
        "name": "Andorra",
        "code": "AD",
        "population": 84000,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 48,
        "confirmed": 754,
        "recovered": 545,
        "critical": 14,
        "calculated": {
        "death_rate": 6.36604774535809,
        "recovery_rate": 72.28116710875332,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 9759
        }
        }
        },
        {
        "coordinates": {
        "latitude": 0,
        "longitude": 0
        },
        "name": "Angola",
        "code": "AO",
        "population": 13068161,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 2,
        "confirmed": 43,
        "recovered": 13,
        "critical": 0,
        "calculated": {
        "death_rate": 4.651162790697675,
        "recovery_rate": 30.23255813953488,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 1
        }
        }
        },
        {
        "coordinates": {
        "latitude": 0,
        "longitude": 0
        },
        "name": "Anguilla",
        "code": "AI",
        "population": 13254,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 0,
        "confirmed": 3,
        "recovered": 3,
        "critical": 0,
        "calculated": {
        "death_rate": 0,
        "recovery_rate": 100,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 200
        }
        }
        },
        {
        "coordinates": {
        "latitude": 17.05,
        "longitude": -61.8
        },
        "name": "Antigua and Barbuda",
        "code": "AG",
        "population": 86754,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 3,
        "confirmed": 25,
        "recovered": 19,
        "critical": 1,
        "calculated": {
        "death_rate": 12,
        "recovery_rate": 76,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 255
        }
        }
        },
        {
        "coordinates": {
        "latitude": 0,
        "longitude": 0
        },
        "name": "Antarctica",
        "code": "AQ",
        "population": null,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 0,
        "confirmed": 0,
        "recovered": 0,
        "critical": 0,
        "calculated": {
        "death_rate": null,
        "recovery_rate": null,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 0
        }
        }
        },
        {
        "coordinates": {
        "latitude": -27,
        "longitude": 133
        },
        "name": "Australia",
        "code": "AU",
        "population": 21515754,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 12
        },
        "latest_data": {
        "deaths": 97,
        "confirmed": 6941,
        "recovered": 6163,
        "critical": 17,
        "calculated": {
        "death_rate": 1.3974931566056763,
        "recovery_rate": 88.79124045526581,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 272
        }
        }
        },
        {
        "coordinates": {
        "latitude": 47.3333,
        "longitude": 13.3333
        },
        "name": "Austria",
        "code": "AT",
        "population": 8205000,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 3,
        "confirmed": 38
        },
        "latest_data": {
        "deaths": 618,
        "confirmed": 15871,
        "recovered": 13991,
        "critical": 72,
        "calculated": {
        "death_rate": 3.893894524604625,
        "recovery_rate": 88.15449562094386,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 1762
        }
        }
        },
        {
        "coordinates": {
        "latitude": 26,
        "longitude": 50.55
        },
        "name": "Bahrain",
        "code": "BH",
        "population": 738004,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 82
        },
        "latest_data": {
        "deaths": 8,
        "confirmed": 4856,
        "recovered": 2065,
        "critical": 2,
        "calculated": {
        "death_rate": 0.16474464579901155,
        "recovery_rate": 42.52471169686985,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 2854
        }
        }
        },
        {
        "coordinates": {
        "latitude": 24,
        "longitude": 90
        },
        "name": "Bangladesh",
        "code": "BD",
        "population": 156118464,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 14,
        "confirmed": 887
        },
        "latest_data": {
        "deaths": 228,
        "confirmed": 14657,
        "recovered": 2650,
        "critical": 1,
        "calculated": {
        "death_rate": 1.5555707170635191,
        "recovery_rate": 18.080098246571605,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 89
        }
        }
        },
        {
        "coordinates": {
        "latitude": 9.5,
        "longitude": 2.25
        },
        "name": "Benin",
        "code": "BJ",
        "population": 9056010,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 35
        },
        "latest_data": {
        "deaths": 2,
        "confirmed": 319,
        "recovered": 62,
        "critical": 0,
        "calculated": {
        "death_rate": 0.6269592476489028,
        "recovery_rate": 19.435736677115987,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 26
        }
        }
        },
        {
        "coordinates": {
        "latitude": 0,
        "longitude": 0
        },
        "name": "Belize",
        "code": "BZ",
        "population": 314522,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 2,
        "confirmed": 18,
        "recovered": 16,
        "critical": 0,
        "calculated": {
        "death_rate": 11.11111111111111,
        "recovery_rate": 88.88888888888889,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 45
        }
        }
        },
        {
        "coordinates": {
        "latitude": -34,
        "longitude": -64
        },
        "name": "Argentina",
        "code": "AR",
        "population": 41343201,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 300,
        "confirmed": 5776,
        "recovered": 1728,
        "critical": 148,
        "calculated": {
        "death_rate": 5.193905817174515,
        "recovery_rate": 29.916897506925206,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 128
        }
        }
        },
        {
        "coordinates": {
        "latitude": 40,
        "longitude": 45
        },
        "name": "Armenia",
        "code": "AM",
        "population": 2968000,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 1,
        "confirmed": 138
        },
        "latest_data": {
        "deaths": 45,
        "confirmed": 3313,
        "recovered": 1325,
        "critical": 10,
        "calculated": {
        "death_rate": 1.3582855418050106,
        "recovery_rate": 39.99396317536976,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 1118
        }
        }
        },
        {
        "coordinates": {
        "latitude": 44,
        "longitude": 18
        },
        "name": "Bosnia and Herzegovina",
        "code": "BA",
        "population": 4590000,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 5,
        "confirmed": 27
        },
        "latest_data": {
        "deaths": 107,
        "confirmed": 2117,
        "recovered": 1106,
        "critical": 4,
        "calculated": {
        "death_rate": 5.054322153991498,
        "recovery_rate": 52.24374114312707,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 645
        }
        }
        },
        {
        "coordinates": {
        "latitude": 12.5,
        "longitude": -69.9667
        },
        "name": "Aruba",
        "code": "AW",
        "population": 71566,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 3,
        "confirmed": 101,
        "recovered": 89,
        "critical": 4,
        "calculated": {
        "death_rate": 2.9702970297029703,
        "recovery_rate": 88.11881188118812,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 946
        }
        }
        },
        {
        "coordinates": {
        "latitude": 40.5,
        "longitude": 47.5
        },
        "name": "Azerbaijan",
        "code": "AZ",
        "population": 8303512,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 31,
        "confirmed": 2422,
        "recovered": 1620,
        "critical": 29,
        "calculated": {
        "death_rate": 1.2799339388934765,
        "recovery_rate": 66.88687035507844,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 239
        }
        }
        },
        {
        "coordinates": {
        "latitude": 24.25,
        "longitude": -76
        },
        "name": "Bahamas",
        "code": "BS",
        "population": 301790,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 11,
        "confirmed": 92,
        "recovered": 37,
        "critical": 1,
        "calculated": {
        "death_rate": 11.956521739130435,
        "recovery_rate": 40.21739130434783,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 234
        }
        }
        },
        {
        "coordinates": {
        "latitude": 0,
        "longitude": 0
        },
        "name": "Brunei ",
        "code": "BN",
        "population": 395027,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 1,
        "confirmed": 141,
        "recovered": 134,
        "critical": 2,
        "calculated": {
        "death_rate": 0.7092198581560284,
        "recovery_rate": 95.0354609929078,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 322
        }
        }
        },
        {
        "coordinates": {
        "latitude": 0,
        "longitude": 0
        },
        "name": "Bonaire, Sint Eustatius and Saba",
        "code": "BQ",
        "population": 18012,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 0,
        "confirmed": 0,
        "recovered": 0,
        "critical": 0,
        "calculated": {
        "death_rate": null,
        "recovery_rate": null,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 0
        }
        }
        },
        {
        "coordinates": {
        "latitude": 53,
        "longitude": 28
        },
        "name": "Belarus",
        "code": "BY",
        "population": 9685000,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 5,
        "confirmed": 921
        },
        "latest_data": {
        "deaths": 131,
        "confirmed": 22973,
        "recovered": 6406,
        "critical": 92,
        "calculated": {
        "death_rate": 0.5702346232533845,
        "recovery_rate": 27.88490837069603,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 2431
        }
        }
        },
        {
        "coordinates": {
        "latitude": 13.1667,
        "longitude": -59.5333
        },
        "name": "Barbados",
        "code": "BB",
        "population": 285653,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 7,
        "confirmed": 84,
        "recovered": 57,
        "critical": 4,
        "calculated": {
        "death_rate": 8.333333333333332,
        "recovery_rate": 67.85714285714286,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 292
        }
        }
        },
        {
        "coordinates": {
        "latitude": 0,
        "longitude": 0
        },
        "name": "British Indian Ocean Territory",
        "code": "IO",
        "population": 4000,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 0,
        "confirmed": 0,
        "recovered": 0,
        "critical": 0,
        "calculated": {
        "death_rate": null,
        "recovery_rate": null,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 0
        }
        }
        },
        {
        "coordinates": {
        "latitude": 32.3333,
        "longitude": -64.75
        },
        "name": "Bermuda",
        "code": "BM",
        "population": 65365,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 7,
        "confirmed": 118,
        "recovered": 64,
        "critical": 4,
        "calculated": {
        "death_rate": 5.932203389830509,
        "recovery_rate": 54.23728813559322,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 1895
        }
        }
        },
        {
        "coordinates": {
        "latitude": 50.8333,
        "longitude": 4
        },
        "name": "Belgium",
        "code": "BE",
        "population": 10403000,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 75,
        "confirmed": 485
        },
        "latest_data": {
        "deaths": 8656,
        "confirmed": 53081,
        "recovered": 13642,
        "critical": 476,
        "calculated": {
        "death_rate": 16.307153218665814,
        "recovery_rate": 25.70034475612743,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 4580
        }
        }
        },
        {
        "coordinates": {
        "latitude": 6,
        "longitude": 12
        },
        "name": "Cameroon",
        "code": "CM",
        "population": 19294149,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 6,
        "confirmed": 305
        },
        "latest_data": {
        "deaths": 114,
        "confirmed": 2579,
        "recovered": 1465,
        "critical": 28,
        "calculated": {
        "death_rate": 4.420317952694843,
        "recovery_rate": 56.80496316401707,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 97
        }
        }
        },
        {
        "coordinates": {
        "latitude": 27.5,
        "longitude": 90.5
        },
        "name": "Bhutan",
        "code": "BT",
        "population": 699847,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 0,
        "confirmed": 7,
        "recovered": 5,
        "critical": 0,
        "calculated": {
        "death_rate": 0,
        "recovery_rate": 71.42857142857143,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 9
        }
        }
        },
        {
        "coordinates": {
        "latitude": 0,
        "longitude": 0
        },
        "name": "Bolivia",
        "code": "BO",
        "population": 9947418,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 8,
        "confirmed": 171
        },
        "latest_data": {
        "deaths": 114,
        "confirmed": 2437,
        "recovered": 258,
        "critical": 3,
        "calculated": {
        "death_rate": 4.677882642593353,
        "recovery_rate": 10.586787033237586,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 209
        }
        }
        },
        {
        "coordinates": {
        "latitude": 13,
        "longitude": 105
        },
        "name": "Cambodia",
        "code": "KH",
        "population": 14453680,
        "updated_at": "2020-05-10T14:16:48.565Z",
        "today": {
        "deaths": 0,
        "confirmed": 0
        },
        "latest_data": {
        "deaths": 0,
        "confirmed": 122,
        "recovered": 120,
        "critical": 1,
        "calculated": {
        "death_rate": 0,
        "recovery_rate": 98.36065573770492,
        "recovered_vs_death_ratio": null,
        "cases_per_million_population": 7
        }
        }
        }
    ] 
      const projection = geoMercator()
      const pathGenerator = geoPath().projection(projection)
      const countries = worlddata.features
         .map((d,i) => <path
         key={'path' + i}
         d={pathGenerator(d)}
         className='countries'
         />)
   return <svg width={500} height={500}>
   {countries}
   </svg>
   }
}
export default WorldMap;