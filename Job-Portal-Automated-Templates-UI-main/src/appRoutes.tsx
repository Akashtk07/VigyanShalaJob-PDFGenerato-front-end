import React, { Fragment } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Preview from "./features/PDFGenerator/views/Preview/Preview";
import Entry from "./features/PDFGenerator/views/Entry/Entry";
import IDP from "./features/PDFGenerator/views/Preview/IDP/IDPPreview";
import LoginPage from "./features/common/Login";
import TemplateSelectionDashboard from "./features/PDFGenerator/views/Dashboard/Dashboard";
import Dashboard from "./features/common/Dashboard";
import Error from "./features/common/Error";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/home" element={<Dashboard />} />
    <Route
      path="/PDFGenerator/dashboard"
      element={<TemplateSelectionDashboard />}
    />
    <Route path="/PDFGenerator/preview" element={<Preview />} />
    <Route path="/PDFGenerator/entry" element={<Entry />} />
    <Route path="/PDFGenerator/IDP" element={<IDP />} />
    <Route path="/Error" element={<Error />} />
    <Route path="*" element={<Error />} />
  </Routes>
);

export default AppRoutes;
