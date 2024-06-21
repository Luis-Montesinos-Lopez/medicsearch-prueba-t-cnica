import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";
import { Result } from "../../interfaces/Drug-Id-Response.interface";
import DrugsInfoView from "./DrugsInfoView";
import "./DrugsInfo.css";

export default function DrugsInfo() {
    const { id } = useParams();
    const [info, setInfo] = useState<Result | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function fetchDrugsInfo() {
            try {
                const response = await fetch(`https://api.fda.gov/drug/label.json?search=${id}`);
                
                if (!response.ok) {
                    throw new Error(`Error al encontrar el medicamento: ${response.statusText}`);
                }
        
                const data = await response.json();
        
                if (data.results && data.results.length > 0) {
                    setInfo(data.results[0]);
                } else {
                    throw new Error("No se encontraron resultados para el medicamento.");
                }
            } catch (error) {
                console.error("Error fetching drug information:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchDrugsInfo();
    }, [id]);

    return (
        loading ? (
            <Box className="loading"
            >
                <CircularProgress />
            </Box>
        ) : (
            info && <DrugsInfoView medication={info} />
        )
    );
}
