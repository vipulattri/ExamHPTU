import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WelcomeComponent from './WelcomeComponent'; // Import the WelcomeComponent
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is installed in your project

const Result = () => {
    const { rollNo } = useParams(); // Extract the roll number from the URL
    const [studentData, setStudentData] = useState([]); // State to hold student data
    const [loading, setLoading] = useState(false); // State to manage loading status
    const [error, setError] = useState(null); // State to manage error status

    useEffect(() => {
        if (rollNo) {
            fetchStudentData(rollNo); // Fetch student data when the roll number is present in the URL
        }
    }, [rollNo]);

    const fetchStudentData = async (rollNumber) => {
        setLoading(true); // Set loading to true while fetching data
        setError(null); // Reset error state before fetching
        setStudentData([]); // Clear previous student data

        try {
            const response = await fetch(
                `https://vslnavrlzaymdabcnnfa.supabase.co/rest/v1/hptu-exam-data-2024?roll=eq.${rollNumber}&select=*`,
                {
                    headers: {
                        'Authorization': `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`, // Use your actual token
                        'apikey': import.meta.env.VITE_API_KEY,
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            const data = await response.json();
            setStudentData(data); // Set the student data
        } catch (error) {
            setError(error.message); // Set error message
        } finally {
            setLoading(false); // Set loading to false after fetch
        }
    };

    return (
        <div className="p-6">
            {/* Render WelcomeComponent with student_name if available */}
            {studentData.length > 0 && (
                <WelcomeComponent studentName={studentData[0].student_name} />
            )}

            <h1 className="text-2xl font-bold mb-4">Student Result</h1>

            {/* Render loading state */}
            {loading && <div>Loading...</div>}

            {/* Render error state */}
            {error && <div className="text-red-500">Error: {error}</div>}

            {/* Render student data in a table format */}
            {studentData.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="py-2 px-4 border">Title</th>
                                <th className="py-2 px-4 border">Student Name</th>
                                <th className="py-2 px-4 border">Year</th>
                                <th className="py-2 px- 4 border">Course</th>
                                <th className=" py-2 px-4 border">Branch</th>
                                <th className="py-2 px-4 border">Result Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentData.map((item) => (
                                <tr key={item.url_id} className="hover:bg-gray-100 transition duration-200">
                                    <td className="py-2 px-4 border">{item.Title}</td>
                                    <td className="py-2 px-4 border">{item.student_name}</td>
                                    <td className="py-2 px-4 border">{item.Year}</td>
                                    <td className="py-2 px-4 border">{item.student_course}</td>
                                    <td className="py-2 px-4 border">{item.student_branch}</td>
                                    <td className="py-2 px-4 border">
                                        <a
                                        className='text-blue-500 underline hover:text-blue-700 transition-colors duration-200'
                                            href={`https://vidyahptu.xperiment.cloud/pdf_output/${item.roll}_${item.url_id}.pdf`}
                                            target="_blank"
                                            
                                            rel="noopener noreferrer"
                                        >
                                            View PDF
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                !loading && !error && <p className="text-gray-500">No data found for the provided roll number.</p>
            )}
        </div>
    );
};

export default Result;