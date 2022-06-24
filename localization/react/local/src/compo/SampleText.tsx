import React from 'react';
import { useTranslation } from "react-i18next";

const SampleTextDisplay = () => {
    const { t } = useTranslation();
    return (
        <div>
            <br/>
            <br/>
            <strong>{t("translations.Msg")}</strong>
        </div>
    )
}

export default SampleTextDisplay;

