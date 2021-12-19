import React from "react";
import Image from "next/image";
import HeatEngineering from "../../../../images/heatEngineering.png";
import WaterSupply from "../../../../images/waterSupply.png";

const CostServers = () => {
    return (
        <div className="cost_servers">
            <div>
                 <h2 className="cost_servers_title">Cтоимость</h2>
                 <h3 className="cost_servers_min_title">услуг</h3>
            </div>
            <div className="cost_servers__wrapper_content">
                    <div className="cost_servers__water_supply">
                    <div className="cost_servers__water_supply_background">
                        <Image src={HeatEngineering} alt={'heatEngineering'}/>
                    </div>
                    <h2 className="cost_servers__water_supply_title">Водоснабжение</h2>
                    <div className="images">
                        <div className="images_item height image52">
                            <p>Монтаж-бойлера, обвязка и т.о Монтаж-узлов учёта, узлов фильтрации и водоподготовки</p>
                        </div>
                        <div className="images_item">
                            <div className="images_item__image image53">
                                <p>Монтаж-обвязка резервных емкостей водоснабжения.</p>
                            </div>
                            <div className="images_item__image image54">
                                <p>Монтаж-разводка системы водоснабжения в жилых и нежилых помещениях.</p>
                            </div>
                            <div className="images_item__image image55">
                                <p>Монтаж-смесителей или ibox в душевых кабинках ванных, кухнях и т.д</p>
                            </div>
                            <div className="images_item__image image56">
                                <p>Монтаж-систем ГВС рециркуляции уличных систем водоснабжения и прокладка трубо проводов</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cost_servers__heat_engineering">
                    <h2 className="cost_servers__heat_engineering_title">Теплотехника</h2>
                    <div className="cost_servers__heat_engineering_background">
                        <Image src={WaterSupply} alt={'waterSupply'}/>
                    </div>
                    <div className="images reverse">
                        <div className="images_item height rev image61">
                            <p>Монтаж-бойлера, обвязка и т.о Монтаж-узлов учёта, узлов фильтрации и водоподготовки</p>
                        </div>
                        <div className="images_item">
                            <div className="images_item__image image57">
                                <p>Монтаж-систем косвенного подогрева вводы.Монтаж-обвязка радиаторов.</p>
                            </div>
                            <div className="images_item__image image58">
                                <p>Монтаж-обвязка аккумуляторных ёмкостей.</p>
                            </div>
                            <div className="images_item__image image59">
                                <p>Монтаж-водяных тёплых полов.</p>
                            </div>
                            <div className="images_item__image image60">
                                <p>Пусконаладочные работы отопительных систем.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CostServers;