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

const GamePUBG = () => {
    return (
        <div>
                <h1 className="h1">Tổng hợp một số trò chơi điện tử được nhiều người thích</h1>
                        
                        <p className="p">Trò chơi điện tử từ lâu đã có mặt trong đời sống của chúng ta. Nó không chỉ giúp chúng ta thư giãn, giải trí, giúp chúng ta giải tỏa tâm hồn sau một ngày làm việc mệt mỏi mà còn giúp chúng ta giao lưu và kết thêm nhiều bạn mới. Hôm nay, trong bài viết này, mình sẽ chia sẻ với các bạn một số trò chơi điện tử được nhiều người chơi nhất.</p>

                        <Menu Data={Data.DataList}/>

                <h2 className="h2">PUBG </h2>

                        <CardImage image="https://kiemtinh.com/wp-content/uploads/2020/08/PUBG-1.png"/>
                        <p className="p">Một trong số trò chơi điện tử được nhiều người chơi nhất chắc hẳn phải gọi PUBG. PUBG hay còn được gọi là PlayerUnknown’s Battlegrounds, là một trò chơi sinh tồn vô cùng nổi tiếng và được nhiều người yêu thích. Nội dung của game là thả 100 người chơi (bao gồm có bot – những người chơi ảo) xuống một mảnh đất. Người chơi cần phải tìm kiếm vũ khí, áo giáp, phương tiện và những dụng cụ cần thiết để đấu với 99 người còn lại và trở thành người sống sót cuối cùng. Hay nói cách khác, bạn phải 1 chọi 99 và trở thành người duy nhất sống sót.</p>
                        <p className="p">PUBG hấp dẫn người chơi bởi map rộng lớn, bạn có thể tự vận dụng những kỹ năng của mình. Việc cảnh giác để trở thành người sống sót đã kích thích người chơi khiến cho họ cảm thấy hưng phấn, thích thú. Càng đặc biệt hơn khi game có thể chơi ở chế độ 2 người hoặc 4 người, càng tạo tinh thần đồng đội.</p>
                        <p className="p">Nếu như bạn muốn giao lưu với các bạn nước ngoài vậy thì đây chính là trò chơi điện tử phù hợp với bạn. Người chơi PUBG được ghép đấu ở khắp quốc gia trên thế giới, chính vì vậy tạo cơ hội thuận tiện để các bạn giao lưu với nước bạn.</p>
                <h2 className="h2">Liên Minh Huyền Thoại.</h2>
                        <p className="p">Sở hữu một lượng người chơi khủng nên việc Liên Minh Huyền Thoại có mặt trong bài viết này cũng không phải là chuyện gì lạ. Liên Minh Huyền Thoại hay viết tắt là LMHT, tên tiếng anh là League of Legends (LOL) là một trò chơi video đấu trường trận chiến trực tuyến thu hút được nhiều người tham gia. Trò chơi được phát hành vào ngày 27 tháng 10 năm 2009 và được nhiều người để ý đến chỉ trong một thời gian ngắn.</p>
                        <p className="p">Trong Liên Minh Huyền Thoại, mỗi người chơi sẽ là một triệu hồi sư và sở hữu một nhân vật, gọi là tướng. Nhiệm vụ của người chơi là đối đầu với đội những người chơi khác để phá hủy nhà chính của đối phương, là công trình to nằm giữa căn cứ. Để làm được điều này, người chơi cần sử dụng những kỹ năng một cách điêu luyện để vượt trội hơn các game thủ khác và phá được nhà chính đối phương. Chính những điều ấy đã tạo nên một trò chơi điện tử sinh tồn đầy hấp dẫn.</p>
               
                <h2 className="h2">Dota 2</h2>

                        <p className="p">Cũng giống như Liên Minh Huyền Thoại, Dota 2 là một game đấu trường trận chiến trực tuyến nhiều người chơi. Ở Dota 2 sẽ có hai đội, mỗi đội sẽ có 5 người chơi, mỗi người chơi sẽ điều khiển một nhân vật sở hữu một số khả năng nhất định. Đội giành chiến thắng là khi phá hủy được Ancient (Thánh Tích) của đội đối thủ trước tiên. Nghe thì có vẻ dễ nhưng để làm được điều này bạn cần phải điều khiển thành thạo nhân vật của mình và kết hợp ăn ý với đồng đội.</p>
                        <p className="p">Khi tham gia Dota 2, bạn sẽ nhanh chóng bị nó cuốn hút bởi lối chơi, tinh thần đồng đội cùng tiền thưởng cao ngất ngưởng.</p>
                        
                <h2 className="h2">Call of Duty: Warzone</h2>

                        <CardImage iamge="https://kiemtinh.com/wp-content/uploads/2020/09/Call-of-Duty.jpg"/>

                        <p className="p">Call of Duty: Warzone được biết đến là một trong những trò chơi điện tử battle royale nhiều người chơi nhất. Trò chơi được phát hành vào năm 2020 và có lối chơi khá giống PUBG. Bạn sẽ chơi game thông qua góc nhìn thứ nhất, góc nhìn của nhân vật trong game. Game hấp dẫn nhiều người chơi bởi đồ họa đẹp mắt, tính thực tế, độ chân thật cao mang đến nhiều cảm xúc khác nhau. Thậm chí còn có ý kiến cho rằng: “Chơi game không khác gì coi phim hành động, đồ họa đẹp, chơi nhịp tấu nhanh, mang lại những cung bậc cảm xúc khác biệt”.</p>
                <h2 className="h2">Minecraft</h2>
                        
                        <CardImage image="https://kiemtinh.com/wp-content/uploads/2020/09/Craft.png"/>

                        <p className="p">Minecraft là một trò chơi điện tử thu hút những người yêu thích khám phá du lịch, xây dựng. Game lấy bối cảnh ở một thế giới 3Dvà cho phép người chơi sáng tạo và xây dựng nó bằng cách kết hợp các khối lập phương. Nhiệm vụ của bạn trong game là tìm kiếm, thu thập tài nguyên, chế tạo và chiến đấu.</p>
                        <p className="p">Trong game này, bạn có thể khám phá các di tích, kỳ quan. Bạn có thể xây dựng những ngọn tháp, những đường hầm bí mật, hay tạo nên những công trình to lớn. Bạn có thể làm tất cả mọi thứ ở đây chỉ cần chế tạo theo quy tắc mà hệ thống game đã quy định. Chính cái tự do ấy đã thu hút những người chơi và khiến game trở thành một trong những trò chơi điện tử được yêu thích nhất.</p>
                        <p className="p">Trên đây tổng hợp một số trò chơi điện tử được nhiều người chơi nhất. Bạn đã thử chơi một trò chơi nào trong số những trò chơi trên chưa? Nếu chưa thì hãy thử ngay đi nhé. Nó sẽ không làm bạn thất vọng đâu.</p>

               
                <Other Data={Data.DataOther}/>
        </div>
    );
};

export default GamePUBG;