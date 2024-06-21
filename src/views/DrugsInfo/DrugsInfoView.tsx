import { Box } from "@mui/material";
import { DrugInfoProps } from "../../interfaces/DrugsInfo.interface";
import { StyledTypography } from "../../components/UI/Typography/Typografy";
import React from "react";
import { StyledLink } from "../../components/UI/Link/Link";
import { StyledButton } from "../../components/UI/Button/Button";

const DrugsInfoView: React.FC<DrugInfoProps> = ({ medication }) => {
  if (!medication) return null;

  const renderField = (title: string, content: string[] | string | undefined) => {
    if (!content || (Array.isArray(content) && content.length === 0)) return null;
    return (
      <Box className="data" key={title}>
        <Box>
          <StyledTypography variant="h5">{title}:</StyledTypography>
        </Box>
        <Box>
          <StyledTypography variant="body1">
            {Array.isArray(content) ? content.join(", ") : content}
          </StyledTypography>
        </Box>
      </Box>
    );
  };

  return (<>
    <Box className="body">
      {renderField("Nombre genérico", medication.openfda?.generic_name)}
      {renderField("Sobredosis", medication.overdosage)}
      {renderField("Advertencia en recuadro", medication.boxed_warning)}
      {renderField("Indicaciones y uso", medication.indications_and_usage)}
      {renderField("Dosificación y administración", medication.dosage_and_administration)}
      {renderField("Formulario de dosificación y fortalezas", medication.dosage_forms_and_strengths)}
      {renderField("Contraindicaciones", medication.contraindications)}
      {renderField("Advertencias y precauciones", medication.warnings_and_cautions)}
      {renderField("Reacciones adversas", medication.adverse_reactions)}
      {renderField("Interacciones con otros medicamentos", medication.drug_interactions)}
      {renderField("Uso en poblaciones específicas", medication.use_in_specific_populations)}
      {renderField("Embarazo", medication.pregnancy)}
      {renderField("Uso pediátrico", medication.pediatric_use)}
      {renderField("Uso geriátrico", medication.geriatric_use)}
      {renderField("Descripción", medication.description)}
      {renderField("Farmacología clínica", medication.clinical_pharmacology)}
      {renderField("Mecanismo de acción", medication.mechanism_of_action)}
      {renderField("Farmacodinámica", medication.pharmacodynamics)}
      {renderField("Farmacocinética", medication.pharmacokinetics)}
      {renderField("Toxicología no clínica", medication.nonclinical_toxicology)}
      {renderField("Carcinogénesis, mutagénesis y deterioro de la fertilidad", medication.carcinogenesis_and_mutagenesis_and_impairment_of_fertility)}
      {renderField("Estudios clínicos", medication.clinical_studies)}
      {renderField("Cómo se suministra", medication.how_supplied)}
      {renderField("Información para pacientes", medication.information_for_patients)}
      {renderField("Guía del medicamento", medication.spl_medguide)}
      {renderField("Panel de exhibición principal de la etiqueta del paquete", medication.package_label_principal_display_panel)}
    </Box>
    <Box className="button">
      <StyledLink to="/"><StyledButton><StyledTypography>Volver</StyledTypography></StyledButton></StyledLink>
    </Box>
    </>
  );
};

export default DrugsInfoView;
