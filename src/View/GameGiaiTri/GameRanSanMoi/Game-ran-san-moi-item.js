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

const GameRanSanMoiItem = () => {
    return (
        <div>
                <h1 className="h1">Trò chơi rắn săn mồi hay nhất 2021 đừng nên bỏ qua</h1>
                        
                        <p className="p">Trong tuổi thơ mỗi người, có lẽ ai cũng từng chơi qua trò chơi rắn săn mồi trên những chiếc điện thoại
                         cục gạch nokia đúng không nhỉ? Ngày hôm nay, trong bài viết này sẽ giới thiệu với mọi người một 
                        phiên bản rắn săn mồi mới cực kì hấp dẫn, đảm bảo bạn sẽ cực thích. Hãy cùng tìm hiểu trò chơi này nhé!</p>

                        <Menu Data={Data.DataList}/>

                <h2 className="h2">Slither.io – Hậu duệ của trò chơi rắn săn mồi huyền thoại. </h2>

                        <CardImage image="https://kiemtinh.com/wp-content/uploads/2020/12/rắn-săn-mồi2.jpg"/>

                        <p className="p">Slither.io là một game hỗ trợ chơi ở mọi thiết bị, dù là máy tính, laptop hay điện thoại, máy tính bảng,…</p>

                        <p className="p">Để chơi trò chơi này trê máy tính, bạn cần truy cập vào trang chủ của game. Bạn có truy cập bằng cách nhấn vào link dưới đấy: http://slither.io/</p>
                        <p className="p">Còn nếu muốn chơi trên điện thoại, bạn nên tải ứng dụng về và mở như bình thường..</p>
                        <p className="p">Sau khi đã truy cập vào được game, việc tiếp theo bạn cần làm là nhập tên mà bạn muốn và nhấn “play” để bắt đầu cuộc chơi.</p>
                
                <h2 className="h2">Quy luật chơi game Slither.io</h2>

                        <p className="p">Quy luật chơi game khá đơn giản. Đầu tiên, việc bạn cần làm là điều khiển rắn để nó ăn và nuôi lớn nó. Bạn không được phép đâm vào rắn của người chơi khác, nếu không bạn sẽ chết. Khi rắn của người chơi khác chết, bạn có thể đến ăn những đốm sáng để to lên. Hãy nhớ, ăn càng nhiều càng tốt, nếu không sẽ có những con rắn khác tới giành đấy. Khi bạn đã đến một độ dài nào đó, bạn có thể bấm và giữ chuột trái (đối với máy tính) hay nhấn hai lần lên màn hình (đối với điện thoại) để tăng tốc. </p>
                <h2 className="h2">Một số mẹo để chơi game được nhiều điểm hơn.</h2>

                        <CardImage image="https://kiemtinh.com/wp-content/uploads/2020/12/rắn-săn-mồi.jpg"/>
                        <p className="p">Để chơi game này được điểm cao, thì mẹo đầu tiên là không nên ham của. Mặc dù ở trên bài viết có đề cập đến chuyện “ăn càng nhiều càng tốt”, tuy nhiên không khuyến khích các bạn tham lam. Nếu các bạn mới bắt đầu vào game và rắn của các bạn vẫn còn bé thì chỉ nên ăn những đốm sáng lải rải xung quanh thôi, đừng nên ăn xác của những con rắn chết nếu bạn không muốn trở thành mồi của những con rắn khác. </p>
                        <p className="p">Trung tâm của trò chơi cũng là nơi rất nguy hiểm, bạn nên cẩn thận khi đến đó. Bởi đây là nơi có nhiều đốm sáng nhất, cũng là nơi có nhiều rắn nhất. Chỉ cần sơ xuất một chút là rắn của bạn đi đời đấy.</p>
                        <p className="p">Một nguyên tắc vàng trong trò chơi là không nên có giết những con rắn lớn khi mình chưa đủ mạnh. Việc giết rắn khác và ăn xác nó là một cách nhanh nhất để tăng điểm. Thế nhưng đối với những con rắn bé thì đây là một con dao hai lưỡi, bởi nếu không cẩn thận bạn liền trở thành những đốm sáng cho con rắn đó đấy.</p>
                        <p className="p">Việc ăn bám các rắn lớn cũng là một lựa chọn tuyệt vời cho các bạn rắn nhỏ đấy. Bằng việc đi theo những con rắn lớn và đợi nó giết rắn khác và mình nhảy vào hưởng vậy là đã được điểm rồi. Tuy nhiên chúng ta vẫn nên dựa vào sức của mình nhé, không nên lạm dụng mẹo này quá nhiều.</p>
                        <p className="p">Khi bạn đã đến một độ dài nhất định hoặc gặp một con rắn nhỏ hơn, bạn có thể giết nó bằng cách cuộn tròn xung quanh nó. Như vậy nó sẽ không thể đi đâu được và chỉ có thể chết trong lòng chúng ta.</p>
                        <p className="p">Mẹo cuối cùng đó là xoay vòng tròn và giấu phần đầu vào trong khi đã đạt kích cỡ lớn. Bởi khi rắn bạn đã trở nên khổng lồ thì nó sẽ là miếng bánh ngọt trong mắt các con rắn khác. Vì vậy, để tự bảo vệ mình, bạn nên xoay vòng tròn và giữ phần đầu vào trong. Bởi trong game, bạn không thể chết nếu như tự đâm mình.</p>
                        <p className="p">Trong bài viết này, chúng ta đã cùng nhau tìm hiểu về game Slither.io và một số mẹo chơi game.  Mong rằng qua bài viết này bạn sẽ có nhiều trải nghiệm thú vị với trò chơi rắn săn mồi này.</p>
                       
                <Other Data={Data.DataOther}/>
        </div>
    );
};

export default GameRanSanMoiItem;