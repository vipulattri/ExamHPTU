import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import './PYQ.css'; // Import the CSS file for styling
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is installed in your project

const PYQ = () => {
  const [userName, setUserName] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [selectedSemester, setSelectedSemester] = useState('1st');

  // Sample JSON data (replace this with your actual JSON data)
  const data = [
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Applied_Physics",
      "year": 2023,
      "link": "https://drive.google.com/file/d/1lMy7X8b_BnWouzGGoyLFyX99pw_Sm7x3/view?usp=drive_link"
    },

     {
      "sem": "5th",
      "branch": "cse",
      "subject": "ncepg",
      "year": 2019,
      "link": "https://drive.google.com/file/d/11wyqKAYj9IRH5iJC_GmCpTA9iQ_g-mZ2/view?usp=drive_link"
    },

     {
      "sem": "5th",
      "branch": "cse",
      "subject": "ncepg",
      "year": 2022,
      "link": "https://drive.google.com/file/d/11uw1oSMrgEH1bkPSZDv59zMjDb5mGtU6/view?usp=drive_link"
    },

     {
      "sem": "5th",
      "branch": "cse",
      "subject": "ncepg",
      "year": 2018,
      "link": "https://drive.google.com/file/d/11n4D5fJgdozgYKc2xGB05c9twrOJ7ip8/view?usp=drive_link"
    },

     {
      "sem": "5th",
      "branch": "cse",
      "subject": "ncepg",
      "year": 2023,
      "link": "https://drive.google.com/file/d/1lMy7X8b_BnWouzGGoyLFyX99pw_Sm7x3/view?usp=drive_link"
    },

     {
      "sem": "5th",
      "branch": "cse",
      "subject": "ncepg",
      "year": 2015,
      "link": "https://drive.google.com/file/d/11uw1oSMrgEH1bkPSZDv59zMjDb5mGtU6/view?usp=drive_link"
    },
 
    
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "se",
      "year": 2024,
      "link": "https://www.vaishno.edu.in/downloads/nimages/CS-505.pdf"
    },

       {
      "sem": "5th",
      "branch": "cse",
      "subject": "cn",
      "year": 2024,
      "link": "https://www.vaishno.edu.in/downloads/nimages/CS-505.pdf"
    },

     {
      "sem": "5th",
      "branch": "cse",
      "subject": "cn",
      "year": 2024,
      "link": "https://www.vaishno.edu.in/downloads/nimages/CS-505.pdf"
    },
    

     {
      "sem": "5th",
      "branch": "cse",
      "subject": "cn",
      "year": 2024,
      "link": "https://www.vaishno.edu.in/downloads/nimages/cs-506.pdf"
    },
    
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "cg",
      "year": 2024,
      "link": "https://www.vaishno.edu.in/downloads/nimages/cs-503.pdf"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Applied_Physics",
      "year": 2023,
      "link": "https://drive.google.com/file/d/1ke6j0HZbOJew00DOXRAutDTsKwBlxXTG/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Applied_Physics",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1zKjtepfhPXPCDU_TYTcggjExZGbgHxz1/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Applied_Physics",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1tjUSiQQ6zeJiJNc8X5vM6v8Dq_g7tQAC/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Applied_Physics",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1tZEtyfUhi234SSWpgigT27gwZvBoCSFO/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Applied_Physics",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1v2B7fHXPHa5a8_0c008HQVVznd9EK70f/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Applied_Physics",
      "year": 2019,
      "link": "https://drive.google.com/file/d/1FGDoBp8u3_ahfumDcTd2EtlMQodqdMNP/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Applied_Physics",
      "year": 2016,
      "link": "https://drive.google.com/file/d/11r8iTKA0n1N0vqmFD9nOYwHp5HZJxMlM/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "BEE",
      "year": 2023,
      "link": "https://drive.google.com/file/d/1lEZSvF5JPswsk6hLjJg1uvyg2mOjYbuY/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "BEE",
      "year": 2023,
      "link": "https://drive.google.com/file/d/1sGEcIX2qZG3lHPA9M_7rRDBSPVD3tQ36/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "BEE",
      "year": 2022,
      "link": "https://drive.google.com/file/d/129hfSWT673GSpEHNLq6g9_G8A-slRzJz/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "BEE",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1H2UJ18u_QuL8g4ju-tsoaGEs1SxhEmtc/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "BEE",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1umuj8KlvqQNKnc4rxK-AghmIONdfeiZ3/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "BEE",
      "year": 2019,
      "link": "https://drive.google.com/file/d/1QHspqUjTJSM58dxaQSTdgDqsTLDLJLw5/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "BEE",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1c-95T1aQOc8TSbL_rLZ9r0SPUBMjfk71/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "BEE",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1ACga5vNlaQ4k-Pz5YnIoJgoMr4hOJGJ9/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "BEE",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1GpbGWP8ZLCC-B0mbf4lRUuzqXIV_wyKF/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "BEE",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1BFmlVlMDnlUHIdjlrUAMFX4V-gOMmZBm/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Communication",
      "year": 2023,
      "link": "https://drive.google.com/file/d/19E7viP67JXpYZVpfqFr4bdLuhCJKeFLw/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Communication",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1VwgNL7uhEalVkde-aDqDjBFUW6Lwvv1r/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Communication",
      "year": 2022,
      "link": "https://drive.google.com/file/d/14fWQKSY9vEV7upBa2xs-EZOj7NEKb5Gu/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Communication",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1JeV2FmgCbhtVKvq4kFfIfdRNK7LBg_LO/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Communication",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1Hs3SsmFWXInZw-iH5CMwMn--xggz_y0t/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Communication",
      "year": 2015,
      "link": "https://drive.google.com/file/d/1kAhBQq3pfqVpfMzN5cc-q9k8curoQq6l/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Communication",
      "year": 2014,
      "link": "https://drive.google.com/file/d/1Pd1UPnnrlI3cme3sdBYI1-dxQh9oTYZA/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Communication",
      "year": 2013,
      "link": "https://drive.google.com/file/d/1DOQH1cet8OzVivOfVgGXYtkPE7PfRg2B/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Engg_maths",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1X-S5Ir797Cnw2SZ6x5aWKouxH7LjmyLy/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Engg_maths",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1bWyFsJIdhDTX4s3COh6rtn7kb9a05iCR/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Engg_maths",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1C64ggOewSzTEfgy14FnjVBcqWbXQ-8IZ/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Engg_maths",
      "year": 2015,
      "link": "https://drive.google.com/file/d/1KuhtsyLd5MkW3CLuRtyu1way77j22bZp/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Engg_maths",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1nfhG_qxfiQwPhMiNbSOunZpLhYdR63WD/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Engg_maths",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1_RrlGZtkBMlf5tCLFvag5r7ZpZU5PE2V/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Engg_maths",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1L-bTRSA9o2dAREQ1jGR8RRVRc1i9jZLf/view?usp=drive_link"
    },
    {
      "sem": "1st",
      "branch": "all",
      "subject": "Engg_maths",
      "year": 2013,
      "link": "https://drive.google.com/file/d/1F-VRkPYlyBDhd4zGCkR7yO6z_UzhOeAE/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Chem",
      "year": 2023,
      "link": "https://drive.google.com/file/d/1DJGBWFqgxE9fzz-9zOxYcuWR6mId7l9Y/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Chem",
      "year": 2023,
      "link": "https://drive.google.com/file/d/1wUgeyprjo0wtyw4pGpbSN2YbUWMyBs9c/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Chem",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1CzwEQkRcdyuETSw6XO5K94dHZWupEHia/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Chem",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1eLOHDfEfvFtV3bQIO1dSgvu4exM32rS_/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Chem",
      "year": 2015,
      "link": "https://drive.google.com/file/d/1a8ePuV7dUrFBdzyHTnmOy9eAwqbc-9gg/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Chem",
      "year": 2015,
      "link": "https://drive.google.com/file/d/10MqfdiPa_tPug1tJ0YmcHPYxNut5Btim/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Chem",
      "year": 2014,
      "link": "https://drive.google.com/file/d/1XqluLmgorE0HhnKYMdSq5TLaLaKwKqEZ/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Chem",
      "year": 2014,
      "link": "https://drive.google.com/file/d/1j2OhWh7LJI1PFfsqGIpxbkvz2IYRJWrT/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Chem",
      "year": 2013,
      "link": "https://drive.google.com/file/d/1tsrVfxCFRn9iEk1mJcCIXtKv264Xq_dl/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Chem",
      "year": 2013,
      "link": "https://drive.google.com/file/d/1ADEK5O0TnFcbYTL1aDTWG763yMjnZAaF/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Maths",
      "year": 2023,
      "link": "https://drive.google.com/file/d/1XezvsygXkrPb9ws9w2PhN84-oYzgfmdC/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Maths",
      "year": 2023,
      "link": "https://drive.google.com/file/d/1JTmmYFcUPMzvRxtnUjkrDUPBT5j1hM61/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Maths",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1_TlqivP6J7R1BnMgvqF-mxNnUYtGsjym/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Maths",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1Jlixqm6T8OKcaHgmfJA-6129qN5Oforz/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Maths",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1_id3nB7UJTkIrvLigyhh6fvgQFck99Bb/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Maths",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1aJnbfd2UYdwJp2WsV_r78U57VGWsmTDo/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Maths",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1ptfX8iYHREY2O7oWj3tP8td2N6D7mNnC/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Maths",
      "year": 2014,
      "link": "https://drive.google.com/file/d/11x-E9_a6Y22Oc7_PjBMw4LVwwHwu8d6_/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Maths",
      "year": 2014,
      "link": "https://drive.google.com/file/d/1Gc9cxefpVsLYGYROWLzKcYk_6-7E422h/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Maths",
      "year": 2013,
      "link": "https://drive.google.com/file/d/1qCgbpXQwv14baxhbVx_6i8lVJBnWAbo-/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Applied_Maths",
      "year": 2013,
      "link": "https://drive.google.com/file/d/1gjm2uyrUUc5imuyx5R4Xiw-WoLVZgmAC/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Electronics",
      "year": 2023,
      "link": "https://drive.google.com/file/d/1VkO9sl6T1hFjRb9i-_dgZQmuD-DO4H14/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Electronics",
      "year": 2023,
      "link": "https://drive.google.com/file/d/1YpbFoQda33k8LZ6BqZRjRYsMdyMPfO_X/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Electronics",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1-qAsjhc9hoDGbFXxo5Iu72noiYPTBODy/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Electronics",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1Qj6yO8sXZpRjnN1VzPcLAFrpJT6mdyLH/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Electronics",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1W8DgkYpxgj-VmoWVPV5Mmy3qCynGZswk/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Electronics",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1NXfxR2Ii0Se-vyh0xJtF7LtmwvTVgb_0/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Electronics",
      "year": 2018,
      "link": "https://drive.google.com/file/d/17T9heeAd0kAON6q7u8FYdVdcEtDXnXdt/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Electronics",
      "year": 2018,
      "link": "https://drive.google.com/file/d/18Ti4H4JF_sb2NF2oxjyHriGimo39z2SC/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Electronics",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1zjDVn7I37LFYvUHR-1h5Nxjq7Ne8wema/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Electronics",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1SgHgXUQvJPF-_3L9kada3cUIpriG5Lpp/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Electronics",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1FskNgeWYkYG3DwhaFqwGnLNfd0-QJF9M/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Electronics",
      "year": 2015,
      "link": "https://drive.google.com/file/d/1urL_uaPwq4_LjoFf-o9mtBv1Rx1lOnMZ/view?usp=drive_link"
    },
    {
      "sem": "2nd",
      "branch": "all",
      "subject": "Electronics",
      "year": 2014,
      "link": "https://drive.google.com/file/d/1uAqqtDa0SHCHjHJmNuo36rZm51MJIDJB/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "CAO",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1C50EQuYeMblVrQd7vavoFiwcxONzCqpc/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "CAO",
      "year": 2016,
      "link": "https://drive.google.com/file/d/19l3CGDeD9MAvtCUVtb4cXF_5aKXg1Xcw/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "CAO",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1tJx-4J3n9-0WLCBegRwH_R-xbXzd73NC/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "CAO",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1q7IPZ9agwEHu61bXeFIWzyxO7VoBpXkf/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "CAO",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1tQBfC7hwTWkwUhHzKg-lSkHHtJwB812E/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "DS",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1bzgJFg3z5Ou7iLP8f3XtdxCVihrENmP7/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "DS",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1Cw2rpW93OvQnbHFaOsYfl9A1GNRcASrL/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "DS",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1Y-tZ6aRJaxCPiIv77sh_wDt9wPShRj7T/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "DS",
      "year": 2017,
      "link": "https://drive.google.com/file/d/127fEvbFgpJR8XU3f3mYB2075Yro9OgdP/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "DS",
      "year": 2016,
      "link": "https://drive.google.com/file/d/171kOLdCwf2Y0KOs22RImqZQzUwZ0Jzdv/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "DS",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1ZYXibXZXndCHbSPkZqLmVgA-gsix6TZ2/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "DS",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1ihd9lQfUpKbFBHxx7YzkZTBuEjUcudIp/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "DE",
      "year": 2023,
      "link": "https://drive.google.com/file/d/1Q18BVJ8fMCrEb1bnGg5m9hSAL_oQN-gB/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "DE",
      "year": 2022,
      "link": "https://drive.google.com/file/d/11O5OJm8C1ePPWhLCFRVIC1t4PD2WYWMR/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "DE",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1fYOtTgscPz6DxRRqaOfrwmthigTXHelD/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "DE",
      "year": 2019,
      "link": "https://drive.google.com/file/d/1qyGIxxkjpI8KD20wgEM7SbWSU--s2uZH/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "IEM",
      "year": 2022,
      "link": "https://drive.google.com/file/d/18l3dkVOSgpkPRNlPlCg6zu46Hpo9Yzwb/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "IEM",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1M51gyxUrAVRnfNyWVMw-uJYy2NfF7niR/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "IEM",
      "year": 2019,
      "link": "https://drive.google.com/file/d/1ic8b0OkQWU6QzrAhYJPZzhr205p_4Mvv/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "IEM",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1-dcTJGqcJpPGsz73w02OUGMunUHL5Ur9/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "IEM",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1R793v6nu9oC8uEHz2LyD5S2KxcSxJnF4/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "OOPS",
      "year": 2023,
      "link": "https://drive.google.com/file/d/1NW9T5AleDbQ63xSO3e_2YnEvtlas0xsq/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "OOPS",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1GGXnFYeTAPaZSYcYKo_xJ-8PR4zuDRgW/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "OOPS",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1nqDv1_H4dVlUfOvqcd3fJWYjTIwX7FGc/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "OOPS",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1EwtnoOwKE7Co2JblniBwqNCYUhNG3ze3/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "OOPS",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1PSpzbxlW2KTQOkRDBcFHJOvX8L0BH818/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "OOPS",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1uvP9DFj510qxJ6ZXD-7gFFvJAfsqZBff/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "OOPS",
      "year": 2013,
      "link": "https://drive.google.com/file/d/1SnfgfO6nwH3A8P-pH9gQztVyR8nvXAEZ/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "P&S",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1ooMtX68LA3iJOTzeO6iAQ2CO4ysqzIPV/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "P&S",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1FFPQiCvHNporYQ8i-wLnziH8LE6tiqtN/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "P&S",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1EfYiym9WHdmp_RWmHnbOZSZsSlFfDP3Q/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "P&S",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1SVNBd4l2_WWhJNTN_Yq80eaFO9KsD47Y/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "sociology",
      "year": 2023,
      "link": "https://drive.google.com/file/d/148YBV4LbtcOpJgtZ1Q5kSQAbvCuViIc_/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "sociology",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1DqEbDzGzwZW7ZrTTXx1k2EHxHujkP_Xb/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "sociology",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1GgKVgz8UDzCoMUbVpxnvmz62nyZumHIU/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "sociology",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1v_yQpL4l77FaCW71qFsbuYmIXwQb8x6N/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "cse",
      "subject": "sociology",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1gc0LGZDDddG3bIrlUCeAQvPwd78mtR5t/view?usp=drive_link"
    },
    {
      "sem": "4th",
      "branch": "cse",
      "subject": "dbms",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1OgifMMq6ziOHZv0umsV_NHBogedJ3Q-O/view?usp=drive_link"
    },
    {
      "sem": "4th",
      "branch": "cse",
      "subject": "dbms",
      "year": 2017,
      "link": "https://drive.google.com/file/d/15HuCYrW_63sXqOXaYlzW6ZLrMrUlAU-V/view?usp=drive_link"
    },
    {
      "sem": "4th",
      "branch": "cse",
      "subject": "hvpe",
      "year": 2021,
      "link": "https://drive.google.com/file/d/12QDwHyGc-KiSHZJHk8wwewBQL8-suzOW/view?usp=drive_link"
    },
    {
      "sem": "4th",
      "branch": "cse",
      "subject": "hvpe",
      "year": 2019,
      "link": "https://drive.google.com/file/d/1NJV9qBasakwuXMAo44RjR_Hf9bl34gIe/view?usp=drive_link"
    },
    {
      "sem": "4th",
      "branch": "cse",
      "subject": "hvpe",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1pa3go0y99i4lq4sb4OcadeuBodIaAUWz/view?usp=drive_link"
    },
    {
      "sem": "4th",
      "branch": "cse",
      "subject": "hvpe",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1eioDCDnKuOy-2IND6yM_ZwYrzDj7zH9E/view?usp=drive_link"
    },
    {
      "sem": "4th",
      "branch": "cse",
      "subject": "mp",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1eioDCDnKuOy-2IND6yM_ZwYrzDj7zH9E/view?usp=drive_link"
    },
    {
      "sem": "4th",
      "branch": "cse",
      "subject": "os",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1lDUIeyOp8dkkYAymFvIZhNlZ6wa4HY8B/view?usp=drive_link"
    },
    {
      "sem": "4th",
      "branch": "cse",
      "subject": "os",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1K-Za3cuZ5z9U-h7YaOQdv6HCFiTniRS-/view?usp=drive_link"
    },
    {
      "sem": "4th",
      "branch": "cse",
      "subject": "os",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1f3QIKU7HDsnSFI7-H-J3I3ItZQG6Wjbm/view?usp=drive_link"
    },
    {
      "sem": "4th",
      "branch": "cse",
      "subject": "os",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1LXZJj9fkjypDhc8ikYzcG5ZF5h5kKcYC/view?usp=drive_link"
    },
    {
      "sem": "4th",
      "branch": "cse",
      "subject": "toc",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1YOQeaOfoq2V85Q2vUGL64SBHLDjP_8ZH/view?usp=drive_link"
    },
    {
      "sem": "4th",
      "branch": "cse",
      "subject": "toc",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1CHMXIWPVNkX9gO6TfyXFwxHfMitgJlhp/view?usp=drive_link"
    },
    {
      "sem": "4th",
      "branch": "cse",
      "subject": "toc",
      "year": 2016,
      "link": "https://drive.google.com/file/d/187t-IMfkXpNfVlrB42LPEXJudYRM-Xs7/view?usp=drive_link"
    },
    {
      "sem": "4th",
      "branch": "cse",
      "subject": "toc",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1odI0WJmDoFDI18GtqXKjPc750PursOD1/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "ada",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1Nyz4WjI6LUbgO4y2jTwBL0za54mHfTwX/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "ada",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1sEXbMoK-eUu4O0Nq6UUM2M3Qgp_My4r_/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "ada",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1ejap9--ROF93b_iwZ1F8v2LPTboH4sqe/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "ada",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1Ilw2bJrxNVzn3WdWFtAc20enQ-Auzywd/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "ada",
      "year": 2015,
      "link": "https://drive.google.com/file/d/1Cme85QDS0Zy6u8GOy8_9shZnFvS1iQMv/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "ai",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1MnoXWAyPH5WNB0CdIcbjS04i3DDJiDcl/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "ai",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1dH_WE9XogSS1VVhchIpgNiRQ1yyurKLu/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "ai",
      "year": 2018,
      "link": "https://drive.google.com/file/d/16vaXNg7CQTyCYvxJRNSNvGmhivA-TJ1C/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "ai",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1K1LAy4VUomrjXk66_AxJJITdkP5HpNOm/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "cg",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1CX_us5zK1CTqfQTxKlv6bWRW85eEj9sc/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "cg",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1ILoAK5MvkqCQz_yBymjafNugizS1hPIH/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "cg",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1lokjEu57HRFAkOlrbmOy5X2GvG8hynrH/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "cg",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1Suk1Zg4qsK2VIy4692IN-7Vmj-2opRHA/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "cn",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1lLHHlRdVPM6KMv67DTzd0bUWtE4LPZmq/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "cn",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1IHImojQUlYXi8YwmgJHlIoh-TgVYwxCR/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "cn",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1CyS2PTWS0dtCDJeCy2r2DqjzIx4bCJKn/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "cn",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1Yst1_KhuheATfuZSA5g7wzmKE688npoZ/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "cn",
      "year": 2015,
      "link": "https://drive.google.com/file/d/1-o1XzvJ_hENBVxmwWJ6OeL3SjgDvbOOr/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "cn",
      "year": 2015,
      "link": "https://drive.google.com/file/d/1RLMKptvqzG3CjrJzJunTs3csbwHRKlLo/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "cn",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1IHImojQUlYXi8YwmgJHlIoh-TgVYwxCR/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "core_java",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1cSE5_4ySe3ccojP5q42qmQhcYxtZ-07h/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "core_java",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1gm-v2_3oZ2eiMTFIyfELOfzUlsiP5HHI/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "core_java",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1DnNk6JgcWn3fCKMvbSAWsawnZnuX6UC4/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "se",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1n1MRv6hjOLfs-jeSpPECxgw2jm8oKxv7/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "se",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1IUajwxwWfuBkNItJS7MGFvVZOKreZh4E/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "se",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1jW_kJ6Hvq3DU7deOR_JduxmPeJEzNkEy/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "se",
      "year": 2016,
      "link": "https://drive.google.com/file/d/14strnacpCnxgcnKRJ9ZvQ8AiefwHTiP6/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "se",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1g6eYjFp__e8-jZ5L_xEMoTrCMdXP7hkm/view?usp=drive_link"
    },
    {
      "sem": "5th",
      "branch": "cse",
      "subject": "se",
      "year": 2015,
      "link": "https://drive.google.com/file/d/18oqPpDTeKzVx42uSHBB9mhd_buCm7jMi/view?usp=drive_link"
    },
    {
      "sem": "6th",
      "branch": "cse",
      "subject": "Advance_java",
      "year": 2019,
      "link": "https://drive.google.com/file/d/1qjmZI8NSV6lssRN_grZtm8RbuanzP44k/view?usp=drive_link"
    },
    {
      "sem": "6th",
      "branch": "cse",
      "subject": "Advance_java",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1ljsbll_AFVMFUBbhrCEX-a5ZXcv2F7Z2/view?usp=drive_link"
    },
    {
      "sem": "6th",
      "branch": "cse",
      "subject": "cd",
      "year": 2019,
      "link": "https://drive.google.com/file/d/17tHH66IvKIY6vdmlmQBn5ANqfvznIryN/view?usp=drive_link"
    },
    {
      "sem": "6th",
      "branch": "cse",
      "subject": "cd",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1w6fRJ7T32w0zb6LxVFsAeR3PY5zKZbIj/view?usp=drive_link"
    },
    {
      "sem": "6th",
      "branch": "cse",
      "subject": "cd",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1QW3fmRRj0RoHddeY9tkD7h9pbYHgeMtc/view?usp=drive_link"
    },
    {
      "sem": "6th",
      "branch": "cse",
      "subject": "cd",
      "year": 2015,
      "link": "https://drive.google.com/file/d/1pL5c4dWCZXHp4QPUUgNfN0zG_iNKbnkZ/view?usp=drive_link"
    },
    {
      "sem": "6th",
      "branch": "cse",
      "subject": "cd",
      "year": 2014,
      "link": "https://drive.google.com/file/d/1pAEttMG74HWc5SW_THA-j8ZOjslOsum7/view?usp=drive_link"
    },
    {
      "sem": "6th",
      "branch": "cse",
      "subject": "dm",
      "year": 2019,
      "link": "https://drive.google.com/file/d/1Jc0BSkAdkGCqHY-qilnuPSCfdFumrVZd/view?usp=drive_link"
    },
    {
      "sem": "6th",
      "branch": "cse",
      "subject": "dm",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1Qh4A7QM5mvlJrbJ497H0_tx4g5S6koRN/view?usp=drive_link"
    },
    {
      "sem": "6th",
      "branch": "cse",
      "subject": "dos",
      "year": 2019,
      "link": "https://drive.google.com/file/d/1r1QW09Kd4qwFknD9cT2n9at6K9-iOUag/view?usp=drive_link"
    },
    {
      "sem": "6th",
      "branch": "cse",
      "subject": "dos",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1WfafFLFw9_SODprw-9v3PVNjTltPdATL/view?usp=drive_link"
    },
    {
      "sem": "6th",
      "branch": "cse",
      "subject": "linux",
      "year": 2019,
      "link": "https://drive.google.com/file/d/1Y1WSRzZ2soFvLddvNO0adsBaJkKdFGpD/view?usp=drive_link"
    },
    {
      "sem": "6th",
      "branch": "cse",
      "subject": "linux",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1BrfKFJpsUl1w07DD8LC5--_14D7TIj5W/view?usp=drive_link"
    },
    {
      "sem": "6th",
      "branch": "cse",
      "subject": "ms",
      "year": 2019,
      "link": "https://drive.google.com/file/d/1uSxH2objFzDEBA24SPAO7U155NRlDKzm/view?usp=drive_link"
    },
    {
      "sem": "6th",
      "branch": "cse",
      "subject": "ms",
      "year": 2019,
      "link": "https://drive.google.com/file/d/1bztcWfaZpGGKtxLrHEFKiFM5dQRU7gdO/view?usp=drive_link"
    },
    {
      "sem": "6th",
      "branch": "cse",
      "subject": "ms",
      "year": 2018,
      "link": "https://drive.google.com/file/d/13ScViOSVA2Puvybiny8F2b3RwdQouj_X/view?usp=drive_link"
    },
    {
      "sem": "7th",
      "branch": "cse",
      "subject": "aca",
      "year": 2019,
      "link": "https://drive.google.com/file/d/13H_CxNwtQjgCwSPfq-asw0HBRQov-TJs/view?usp=drive_link"
    },
    {
      "sem": "7th",
      "branch": "cse",
      "subject": "aca",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1fC95Z9mgxDPIMgEzCyfQNUibatrdfLtR/view?usp=drive_link"
    },
    {
      "sem": "7th",
      "branch": "cse",
      "subject": "aca",
      "year": 2016,
      "link": "https://drive.google.com/file/d/11fYTS9oHCY-3GXbsJ_sSBVI-bt75qiY3/view?usp=drive_link"
    },
    {
      "sem": "7th",
      "branch": "cse",
      "subject": "aca",
      "year": 2015,
      "link": "https://drive.google.com/file/d/1016DXM9-XRzmzuLD9fMa359aTMAUAezY/view?usp=drive_link"
    },
    {
      "sem": "7th",
      "branch": "cse",
      "subject": "cc",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1M5u5zWzqNUbUMOxpAjWW_5EDiCz1DJ3Z/view?usp=drive_link"
    },
    {
      "sem": "7th",
      "branch": "cse",
      "subject": "is",
      "year": 2019,
      "link": "https://drive.google.com/file/d/1j6Ip2aER3ungu9Tx4qSBH92fpHiwXCWe/view?usp=drive_link"
    },
    {
      "sem": "7th",
      "branch": "cse",
      "subject": "is",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1Ih1NsSu1MCvSE3Ii3ExFwsM4dkuvJGp5/view?usp=drive_link"
    },
    {
      "sem": "7th",
      "branch": "cse",
      "subject": "is",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1rHE7IDhbmpwFSB1jn1TDc8hazzhS83a-/view?usp=drive_link"
    },
    {
      "sem": "7th",
      "branch": "cse",
      "subject": "is",
      "year": 2015,
      "link": "https://drive.google.com/file/d/1EVolcWuiaHyG8s0SbaYwcqd0qt5WzATM/view?usp=drive_link"
    },
    {
      "sem": "7th",
      "branch": "cse",
      "subject": "wmc",
      "year": 2019,
      "link": "https://drive.google.com/file/d/1F8a6M5S4n1srBrkxRM6KF-78Mm9quhA2/view?usp=drive_link"
    },
    {
      "sem": "7th",
      "branch": "cse",
      "subject": "wmc",
      "year": 2019,
      "link": "https://drive.google.com/file/d/1TgxpWaHFkcbUR7lqUWO-2LxblAUPGdFD/view?usp=drive_link"
    },
    {
      "sem": "7th",
      "branch": "cse",
      "subject": "wmc",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1stg8qayQi_HNGjSwzWwGC_RZv540SSoP/view?usp=drive_link"
    },
    {
      "sem": "7th",
      "branch": "cse",
      "subject": "wmc",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1dM3kR99nVB5CtkxUDkvliWGURg7rHY-A/view?usp=drive_link"
    },
    {
      "sem": "7th",
      "branch": "cse",
      "subject": "wmc",
      "year": 2015,
      "link": "https://drive.google.com/file/d/1eGxheR4R7RFuEDvnAffge0oe4WVRiY8l/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "IEM",
      "year": 2022,
      "link": "https://drive.google.com/file/d/18l3dkVOSgpkPRNlPlCg6zu46Hpo9Yzwb/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "IEM",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1M51gyxUrAVRnfNyWVMw-uJYy2NfF7niR/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "IEM",
      "year": 2019,
      "link": "https://drive.google.com/file/d/1ic8b0OkQWU6QzrAhYJPZzhr205p_4Mvv/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "IEM",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1-dcTJGqcJpPGsz73w02OUGMunUHL5Ur9/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "IEM",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1R793v6nu9oC8uEHz2LyD5S2KxcSxJnF4/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "P&S",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1ooMtX68LA3iJOTzeO6iAQ2CO4ysqzIPV/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "P&S",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1FFPQiCvHNporYQ8i-wLnziH8LE6tiqtN/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "P&S",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1EfYiym9WHdmp_RWmHnbOZSZsSlFfDP3Q/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "P&S",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1SVNBd4l2_WWhJNTN_Yq80eaFO9KsD47Y/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "sociology",
      "year": 2023,
      "link": "https://drive.google.com/file/d/148YBV4LbtcOpJgtZ1Q5kSQAbvCuViIc_/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "sociology",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1DqEbDzGzwZW7ZrTTXx1k2EHxHujkP_Xb/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "sociology",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1GgKVgz8UDzCoMUbVpxnvmz62nyZumHIU/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "sociology",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1v_yQpL4l77FaCW71qFsbuYmIXwQb8x6N/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "sociology",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1gc0LGZDDddG3bIrlUCeAQvPwd78mtR5t/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "mos",
      "year": 2023,
      "link": "https://drive.google.com/file/d/1KW5AD3kZdPYMNWC5KJfDkHYWMO0AgA5j/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "mos",
      "year": 2022,
      "link": "https://drive.google.com/file/d/1NtyI7G3rGhd2hAU1UZN5YZKFO3BdLJvH/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "mos",
      "year": 2018,
      "link": "https://drive.google.com/file/d/1Eb07ebq7qcAS1mKEZxXsPLSUetqMbfoy/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "mos",
      "year": 2017,
      "link": "https://drive.google.com/file/d/1MxCvUh7d5Z0waDZYLaJrYedvg-SlIrU2/view?usp=drive_link"
    },
    {
      "sem": "3rd",
      "branch": "civil",
      "subject": "mos",
      "year": 2016,
      "link": "https://drive.google.com/file/d/1z02sHSlq1EsinwAXWLToLBIfkHQvqxj2/view?usp=drive_link"
    }
  ]
  // Filtered data based on branch and semester
  const filteredData = data.filter(
    (item) =>
      (selectedBranch === 'all' || item.branch === selectedBranch) &&
      item.sem === selectedSemester
  );

  // Format user's name
  const formatStudentName = (name) =>
    name
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

  // Get the greeting based on the time of day
  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning ☀️';
    if (hour < 18) return 'Good Afternoon ☀️';
    if( hour>18 && hour<=21) return 'Good Evening  ☾ ';
    if(hour>21) return 'Good night Take a dream ⋆ ';
    return 'Good Evening';
  };

  // GSAP animations
  useEffect(() => {
    if (showWelcome) {
      gsap.from('.welcome-title', { duration: 1, opacity: 0, y: -50, ease: 'bounce' });
      gsap.from('.welcome-subtitle', { duration: 1, opacity: 0, y: 50, ease: 'bounce', delay: 0.5 });
    }
  }, [showWelcome]);

  return (
    <div>
      {!showWelcome ? (
        <div className="name-input-container bg-gray-200 min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Enter Your Name</h2>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Your Name"
              value={userName}
              if(e.target.value = "") {
                      <h4>Please Enter your name </h4>
                else {

              onChange={(e) => setUserName(e.target.value)}
            />
                
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 mt-4 rounded"
              onClick={() => setShowWelcome(true)}
            >
              Submit
            </button>
                }
          </div>
        </div>
      ) : (
        <div className="main-content">
          {/* Welcome Section */}
          <div className="bg-white flex items-start justify-start py-10 px-4">
            <div className="text-left ml-0">
              <h1
                className="welcome-title text-black text-6xl md:text-7xl font-black leading-none"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                WELCOME<br />
              </h1>
              <h2
                className="welcome-subtitle text-pink-500 text-4xl md:text-5xl font-black leading-none"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                {formatStudentName(userName)} 👋<br />
                {getTimeGreeting()}
              </h2>
            </div>
          </div>

          {/* Filters Section */}
          <div className="container-ques mt-8">
            <h2 className="h2">Select Branch and Semester B.Tech</h2>
            <div className="filters">
              <label htmlFor="branch">Branch:</label>
              <select
                id="branch"
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
              >
                <option value="all">All</option>
                <option value="cse">CSE</option>
                <option value="civil">Civil</option>
              </select>

              <label htmlFor="semester">Semester:</label>
              <select
                id="semester"
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
              >
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
              </select>
            </div>

            {/* Table Section */}
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Year</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.subject}</td>
                    <td>{item.year}</td>
                    <td>
                      <a
                        className="get"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click here
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PYQ;
