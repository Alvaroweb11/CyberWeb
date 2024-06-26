import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, HomePage, RegisterPage } from "../pages";

export const NonAuthRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
    )
}