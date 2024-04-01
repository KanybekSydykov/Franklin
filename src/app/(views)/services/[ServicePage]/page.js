import React from 'react'
import QuoteSection from '../../../components/shared-components/quote/QuoteSection'
import Philosophy from '../../../components/shared-components/philosophy/Philosophy'
import Principes from '../../../components/shared-components/principes/Principes'
import Subtleties from '../../../components/shared-components/subtleties/Subtleties'
import ServiceStepsContainer from '../../../components/shared-components/service-steps/ServiceStepsContainer'
import MaterialEquipmentProcurement from '../../../components/shared-components/material-equipment-rocurement/MaterialEquipmentProcurement'
import Offer from '../../../components/shared-components/unique-offer/Offer'
import UpArrow from '../../../components/shared-components/up-arrow/UpArrow'

const serviceData = {
    title: "Дизайн проектирование жилых помещений",
    subtitle: 'Планировочное решение интерьера',
    steps: [
        {
            title: "1 Этап",
            list: [
                "Консультация ознакомительная",
                "Заключение договора",
                "Выезд на замеры и фото фиксация объекта, составление базовых чертежей (замеры снимаются в зоне досягаемости без строительных лесов)",
                "Составление технического задания",
            ],
            image: "/subtleties.png",
        },
        {
            title: "2 Этап",
            list: [
                "Разработка планировки помещения с расстановкой оборудования (до 3х вариантов)",
                "Обсуждение и выбор",
                "Согласование и подписание утвержденного варианта планировки",
            ],
            image: "/subtleties.png",
        },
        {
            title: "3 Этап",
            list: [
                "Разработка проектной документации",
                "Обмерный план существующей планировки",
                "План демонтажа стен",
                "План монтажа стен",
                "Планировка помещения",
                "План с расстановкой оборудования",
                "Спецификация оборудования с размерами",
            ],
            image: "/subtleties.png",
        },
    ],
};

const equipmentData = {
    title: "Комплектация материалов и оборудования интерьера",
    subtitle: '(учитываются чистовые отделочные материалы)',
    list: [
        "Консультация ознакомительная",
        "Заключение договора",
        "Выезд на замеры и фото фиксация объекта, составление базовых чертежей (замеры снимаются в зоне досягаемости без строительных лесов)",
        "Составление технического задания",
    ],
    bonus: '+ Бонус - предоставление скидки от 10 до 20 % от FRANKLIN на все предлагаемые материалы и оборудование',
    image: "/subtleties.png",
};

const page = () => {
    return (
        <>
            <section style={{ paddingTop: '80px' }}>

                <QuoteSection />
            </section>
            <section>

                <Philosophy />
            </section>

            <section>
                <Principes />
            </section>

            <section>
                <Subtleties />
            </section>

            <section>
                <ServiceStepsContainer serviceData={serviceData} />
            </section>

            <section>
                <MaterialEquipmentProcurement sectionTitle = {serviceData.title} equipmentData={equipmentData} />
            </section>

            <section>
                <Offer />
            </section>

            <section>
                <QuoteSection UpArrowComponent={UpArrow} />
            </section>
        </>
    )
}

export default page


