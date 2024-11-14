import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import PerformanceComparison from './components/PerformanceComparison';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-start h-16">
              <div className="flex space-x-8">
                <NavLink
                  to="/test1"
                  className={({ isActive }) =>
                    `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      isActive
                        ? 'border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`
                  }
                >
                  Test 1
                </NavLink>
                <NavLink
                  to="/test2"
                  className={({ isActive }) =>
                    `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      isActive
                        ? 'border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`
                  }
                >
                  Test 2
                </NavLink>
                {/* Add more NavLinks as needed */}
              </div>
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/test1" element={<PerformanceComparison />} />
            <Route path="/test2" element={<div>Test 2 Component</div>} />
            <Route path="/" element={<Navigate to="/test1" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;