// CompletedProjects.jsx
import { useState } from "react";
import { FaHome, FaBuilding, FaCity, FaHotel } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Project Navigation Tabs Component
const ProjectTabs = ({ activeProject, onProjectChange }) => {
  const projects = [
    { id: "penthouse", name: "Luxury Penthouse", icon: <FaBuilding /> },
    { id: "studio", name: "Modern Studio", icon: <FaHome /> },
    { id: "office", name: "Office Space", icon: <FaCity /> },
    { id: "apartment", name: "Premium Apartment", icon: <FaBuilding /> },
    { id: "serviced-apartment", name: "Serviced Apartment", icon: <FaHotel /> },
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6">
      {projects.map((project) => (
        <button
          key={project.id}
          onClick={() => onProjectChange(project.id)}
          className={`flex items-center gap-2 px-4 py-2 cursor-pointer rounded-xl font-medium transition-all duration-300 ${
            activeProject === project.id
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-400 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {project.icon} {project.name}
        </button>
      ))}
    </div>
  );
};

// Project Details Component
const ProjectDetails = ({ project }) => {
  if (!project) return null;

  const { title, category, image, description, details } = project;
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 flex flex-col lg:flex-row gap-6">
      {/* Left: Image */}
      <div className="flex-shrink-0 w-full lg:w-1/3">
        <div className="relative h-48 lg:h-64 rounded-xl overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </div>
        </div>
      </div>

      {/* Right: Description + Table */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
          {description}
        </p>

        {/* Metrics Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg text-left text-sm">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-3 py-2 font-medium text-gray-700 border-b">
                  Metric
                </th>
                <th className="px-3 py-2 font-medium text-gray-700 border-b">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-blue-50 transition-colors">
                <td className="px-3 py-2 font-medium text-gray-700">
                  Total Area
                </td>
                <td className="px-3 py-2 text-gray-900">{details.totalArea}</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-blue-50 transition-colors">
                <td className="px-3 py-2 font-medium text-gray-700">
                  Furnishing Cost
                </td>
                <td className="px-3 py-2 text-gray-900">
                  {details.furnishingCost}
                </td>
              </tr>
              <tr className="bg-white hover:bg-blue-50 transition-colors">
                <td className="px-3 py-2 font-medium text-gray-700">
                  Number of Rooms
                </td>
                <td className="px-3 py-2 text-gray-900">
                  {details.numberOfRooms}
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-blue-50 transition-colors">
                <td className="px-3 py-2 font-medium text-gray-700">
                  Rental Return (ROI)
                </td>
                <td className="px-3 py-2 text-gray-900">
                  {details.rentalReturn}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div>
          <button
            onClick={() => navigate("/contact")}
            className="w-full lg:w-auto bg-blue-600 cursor-pointer text-white py-2 px-6 rounded-xl font-semibold text-base hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Schedule a Site Visit
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Completed Projects Component
export const CompletedProjects = () => {
  const [activeProject, setActiveProject] = useState("penthouse");

  const projects = {
    penthouse: {
      id: "penthouse",
      title: "Luxury Penthouse",
      category: "Penthouse",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description:
        "A stunning luxury penthouse featuring panoramic city views, premium finishes, and world-class amenities.",
      details: {
        totalArea: "4,250 Sq. Ft",
        furnishingCost: "75 Lacs",
        numberOfRooms: "04",
        rentalReturn: "6.5% Annual",
      },
    },
    studio: {
      id: "studio",
      title: "Modern Studio",
      category: "Studio",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description:
        "An intelligently designed studio apartment that maximizes space efficiency without compromising on style.",
      details: {
        totalArea: "650 Sq. Ft",
        furnishingCost: "12 Lacs",
        numberOfRooms: "01",
        rentalReturn: "7.2% Annual",
      },
    },
    office: {
      id: "office",
      title: "Corporate Office Space",
      category: "Office Space",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description:
        "Premium commercial office space designed for productivity and collaboration.",
      details: {
        totalArea: "5,500 Sq. Ft",
        furnishingCost: "45 Lacs",
        numberOfRooms: "12",
        rentalReturn: "8.5% Annual",
      },
    },
    apartment: {
      id: "apartment",
      title: "Premium Apartment",
      category: "Apartment",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description:
        "A spacious and elegantly designed apartment offering comfort and luxury.",
      details: {
        totalArea: "3,625 Sq. Ft",
        furnishingCost: "35 Lacs",
        numberOfRooms: "06",
        rentalReturn: "5.25% Annual",
      },
    },
    "serviced-apartment": {
      id: "serviced-apartment",
      title: "Serviced Apartment",
      category: "Serviced Apartment",
      image:
        "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description:
        "Fully furnished serviced apartment with hotel-like amenities and services.",
      details: {
        totalArea: "2,200 Sq. Ft",
        furnishingCost: "28 Lacs",
        numberOfRooms: "03",
        rentalReturn: "9.2% Annual",
      },
    },
  };

  const currentProject = projects[activeProject];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Completed Projects
          </h1>
          <p className="text-gray-600">
            Explore our portfolio of premium real estate developments
          </p>
        </header>

        {/* Tabs */}
        <ProjectTabs
          activeProject={activeProject}
          onProjectChange={setActiveProject}
        />

        {/* Project Details */}
        <ProjectDetails project={currentProject} />
      </div>
    </section>
  );
};

export default CompletedProjects;
