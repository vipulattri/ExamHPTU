import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchStudentData = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [studentName, setStudentName] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchDataByRoll = async (roll) => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL, {
        headers: {
          'Content-Type': 'application/json',
          'apikey':import.meta.env.VITE_API_KEY
        },
        params: {
          roll: `eq.${roll}`,
          select: '*',
        },
      });
      if (response.data.length > 0) {
        setData(response.data);
        setError(null); // Clear any previous errors
        toast.success('Data successfully fetched!'); // Show toast notification
      } else {
        setError('No data found for this roll number.');
        setData([]); // Clear previous data
      }
    } catch (error) {
      console.error('Error fetching data by roll:', error.message);
      setError('An error occurred while fetching the data.');
      setData([]); // Clear previous data
    }
  };

  const fetchDataByName = async (name) => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL, {
        headers: {
          'Content-Type': 'application/json',
          'apikey': import.meta.env.VITE_API_KEY
        },
        params: {
          student_name: `ilike.%${name}%`, // Allow partial matching
          select: '*',
        },
      });
      if (response.data.length > 0) {
        setData(response.data);
        setError(null); // Clear any previous errors
        toast.success('Data successfully fetched!'); // Show toast notification
      } else {
        setError('No data found for this name.');
        setData([]); // Clear previous data
      }
    } catch (error) {
      console.error('Error fetching data by name:', error.message);
      setError('An error occurred while fetching the data.');
      setData([]); // Clear previous data
    }
  };

  const handleSearchByRoll = () => {
    if (rollNumber.trim() !== '') {
      fetchDataByRoll(rollNumber);
      setStudentName(''); // Clear name input
    } else {
      setError('Please enter a valid roll number.');
    }
  };

  const handleSearchByName = () => {
    if (studentName.trim() !== '') {
      fetchDataByName(studentName);
      setRollNumber(''); // Clear roll number input
    } else {
      setError('Please enter a valid student name.');
    }
  };

  return (
    <div className="container w-full">
      <div className="bg-emerald-700 h-16 flex items-center justify-center">
        <span className="text-black text-lg text-white font-bold inline-block">Search Student Data</span>
      </div>
      
      {/* Flex container for inputs */}
      <div className="input-container mt-10 mb-2" style={{ display: 'flex', justifyContent: 'space-around', margin: '10px 0' }}>
        <div className='box inline-block'>
          <div className="input-section mt-10">
            <input 
              type="text"
              placeholder="Enter Roll Number"
              value={rollNumber}
              onChange={(e) => {
                setRollNumber(e.target.value);
                setData([]); // Clear previous data when the roll number changes
                setError(null); // Clear any previous errors
              }}
              style={{ border: '2px solid black' }} 
              className="input-box text-black border-black rounded-full text-center px-15 py-2 mr-2 "
            />
            <button onClick={handleSearchByRoll} className="search-button bg-emerald-700 text-white px-4 py-2 rounded-full mb-2 border-black">Submit</button>
          </div>

          <div className="input-section mt-10">
            <input 
              type="text"
              placeholder="Enter Student Name"
              value={ studentName}
              onChange={(e) => {
                setStudentName(e.target.value);
                setData([]); // Clear previous data when the student name changes
                setError(null); // Clear any previous errors
              }}
              style={{ border: '2px solid black' }} 
              className="input-box text-black border-black rounded-full px-15 text-center py-2 mr-2"
            />
            <button onClick={handleSearchByName} className="search-button bg-emerald-700 text-white px-4 py-2 rounded-full border-black">Submit</button>
          </div>
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}

      {/* Render Roll Number Results */}
      {data.length === 1 ? (
        <div className="data-display">
          <h2 className='ml-2 mt-5 text-3xl'>Student Details</h2>
          <table className="student-details-table mt-5 mb-10" style={{ border: "2px solid black", width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid black", padding: "8px" }}>Field</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((student, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Student Name</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{student.student_name}</td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Father's Name</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{student.f_name}</td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>College</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{student.college}</td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Roll Number</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{student.roll}</td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Course</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{student.course}</td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Scheme</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{student.scheme}</td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Branch</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{student.branch}</td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Semester</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{student.sem}</td>
                  </tr>
                  <tr>
  <td style={{ border: "1px solid black", padding: "8px" }}>Link</td>
  <td style={{ border: "1px solid black", padding: "8px" }}>
    <a
      href={`/result/${student.roll}`} // Navigate to Result component with roll number
      className="text-blue-500 underline"
    >
      View Results
    </a>
  </td>
</tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Render Name Search Results (Multiple)
        data.length > 1 && (
          <div className="data-display">
            <h2 className='ml-10'>Matching Student Names</h2>
            <table className="student-results-table mt-5 mb-10" style={{ border: "2px solid black", width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid black", padding: "8px" }}>Roll Number</th>
                  <th style={{ border: "1px solid black", padding: "8px" }}>Student Name</th>
                  <th style={{ border: "1px solid black", padding: "8px" }}>Father's Name</th>
                  <th style={{ border: "1px solid black", padding: "8px" }}>College</th>
                  <th style={{ border: "1px solid black", padding: "8px" }}>View Results</th>
                </tr>
 </thead>
              <tbody>
                {data.map((student, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{student.roll}</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{student.student_name}</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{student.f_name}</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{student.college}</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}> <a
      href={`/result/${student.roll}`} // Navigate to Result component with roll number
      className="text-blue-500 underline"
    >
      View Results
    </a>
                
                        
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}
      <ToastContainer />
    </div>
  );
};

export default SearchStudentData;