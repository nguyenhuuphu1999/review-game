import React from 'react';
import CardImage from '../../../Component/CardImage';
import Image from '../../../Component/Image';
import Tag_a from '../../../Component/Link_a/Tag_a';
import List from '../../../Component/List/List';
import Menu from '../../../Component/Menu/Menu';
import Data from './Data';
// import Other from '../../GameGiaiTri/Other'
import Other from '../../PageDetail/GameGiaiTri/Other'
import { Card } from '@material-ui/core';

const GameXeTangItem = () => {
    return (
        <div>
                <h1 className="h1">Top 3 game xe tăng với đồ họa hấp dẫn không thể bỏ qua</h1>
                        
                        <p className="p">Bạn đam mê những chiến hạm quân sự hoành tráng hay muốn một lần trải nghiệm lái xe tăng xông pha ra chiến trường? Hẳn là dù đam mê nhưng bạn không thể nào viết đơn xin ra trận trong thời bình. Hãy thử cảm giác lái xe tăng trong top 3 game xe tăng – bắn tank hot năm 2020 dưới đây.</p>


                <h2 className="h2">Game Tank Stars </h2>

                        <CardImage image="https://kiemtinh.com/wp-content/uploads/2020/12/xe-tăng.png"/>

                        <p className="p">Tải ngay game Tank Stars về máy, việc điều khiển xe tăng sẽ luôn trong tầm tay bạn. Hủy diệt lực lượng địch bằng cách chọn vũ khí thích hợp và một tọa độ chính xác. Vũ khí bạn chọn có thể là bom nguyên tử hay tên lửa, súng đạn,… Phải ra đòn quyết định thật nhanh chóng, nếu không, bạn sẽ là người tử nạn trên chiến trường.</p>

                        <p className="p">Game Tanks Stars có khá nhiều tính năng hoàn hảo thu hút gamer:</p>
                        <List Data={Data.DataList}/>
                        <p className="p">Trở thành ngôi sao bắn tăng ngay lập tức bằng cách tải Tank Stars về máy và khởi động trò chơi ngay hôm nay.</p>

                <h2 className="h2">Game Hills of Steel</h2>

                        <CardImage image="https://kiemtinh.com/wp-content/uploads/2020/12/xe-tăng1.jpg"/>
                        <p className="p">Một trong những tựa game được người chơi đánh giá cao nhất của Round Zero game Hills of Steel. Không quá kịch tính, căng thẳng, Hills of Steel được tạo hình một cách hài hước, vui nhộn cùng lối chơi đơn giản. Bạn cần thổi bay kẻ địch trước khi bị chúng loại bỏ bằng chiếc xe tăng ngộ nghĩnh, đồng hành cùng nó trong suốt thời gian trên chiến trường. Chỉ cần địch lọt vào tầm ngắm của bạn, hãy hạ nock out chúng ngay lập tức. </p>
                        <p className="p">Điều gây trở ngại cho bạn trong game là tính vật lí của game khá khác biệt. Xe tăng của bạn có thể bị lật bởi một gờ đồi siêu nhỏ hay hình ảnh vô cùng hài hước – xe tăng địch chỉ đi bằng hai bánh sau. Phải quen với địa hình kiểu này trong vô vàn trận đấu, bạn mới có thể lên cao thủ chứ không hề đơn giản như bạn nghĩ. Vì vậy, game mang sức hút khá lớn.</p>
                        <p className="p">Trong game Hills of Steel có đến 9 loại xe tăng khác nhau với hàng loạt vũ khí tối tân: pháo cobra, súng 6 nòng, trụ phóng điện, lưỡi cưa máy,… giúp bạn thoải mái lựa chọn và tung hoành trên mọi trận địa. Bạn có thể lựa chọn lối chơi bắn từ xa an toàn hay đánh giáp lá cà để sát thương đối thủ. Sau mỗi trận đánh, hãy nâng cấp xe tăng của mình để trở nên mạnh hơn và phù hợp với lối chơi của mình hơn.</p>
                        <p className="p">Game Hills of Steel có rất nhiều lối chơi vui nhộn, hài hước. Có thể chiến đấu 1 – 1 hoặc tìm đồng minh có sự phối hợp ăn ý để chiến 2 – 2. </p>
                        <p className="p">Với đồ họa 2D ngộ nghĩnh, game thực sự là một trải nghiệm tuyệt vời cho bạn.</p>
                <h2 className="h2">Game Tank Heroes </h2>

                        <CardImage image="https://kiemtinh.com/wp-content/uploads/2020/12/xe-tăng2.jpg"/>
                        <p className="p">Game Tank Heroes phổ biến từ năm 2019 và vẫn có sức hút lớn trong 2020, không chỉ ở Việt Nam mà còn ở rất nhiều nước trên thế giới. Nếu bạn không còn nhiều hứng thú với các loại bắn tank truyền thống thì đây là game phù hợp dành cho bạn. </p>
                        <p className="p">Việc của bạn là chọn ra một chiếc xe tăng mà mình yêu thích và xông thẳng ra chiến trường, bắn bỏ địch để trở thành anh hùng bắn tăng. Nhưng muốn chiến thắng tất cả đối thủ, bạn nhớ nâng cấp xe tăng của mình thường xuyên.</p>
                        <p className="p">Game Tank Heroes có khá nhiều tính năng độc đáo:</p>
                       
                        <List Data={Data.DataList1}/>

                        <p className="p">Được đánh giá là tựa game bắn tăng miễn phí thú vị, Tank Heroes phù hợp cho cả những đối tượng là trẻ em. Vì vậy, bạn không cần lo lắng khi tải game về máy.</p>
                        <p className="p">Cùng Top 3 game xe tăng thực hiện mong muốn của bạn, khuấy đảo chiến trường ngay trong thời bình nhé.</p>
                <Other Data={Data.DataOther}/>
        </div>
    );
};

export default GameXeTangItem;