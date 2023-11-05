import React from "react";
import { SideBar, NavBar } from "../../Components";
import Image from "next/image";
const Post = () => {
  return (
    <div className="pt-5 px-5 lg:px-10">
        <Image src={"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} className="object-fill lg:object-cover rounded-md  h-[20vh] lg:h-[50vh] w-full" width={0} height={0} sizes="100vw" alt="Music blog"/>
        <div className="mt-5 relative">
          <div className="space-x-2 font-verelaRound text-[#be9656]">
            <span>Music</span>
            <span>Life</span>
          </div>
          <section className="space-y-1 mb-10">
            <h2 className="text-xl lg:text-2xl font-josefinSans cursor-pointer">
              Lorem ipsum dolor sit amet.
            </h2>
            <article className="space-y-7">
              <p className="text-gray-700 font-verelaRound first-letter:text-3xl first-letter:font-bold indent-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                perspiciatis dolor quidem voluptatibus! Natus placeat veritatis
                illum quisquam pariatur. Exercitationem similique vitae natus
                excepturi esse eaque asperiores, impedit corrupti. Recusandae
                dolorum eos similique perferendis, quam quos voluptatum natus
                adipisci, labore aspernatur earum fugiat illum placeat voluptas?
                At iusto dolor molestias illo fugiat? Incidunt doloremque omnis
                sed exercitationem a ea tempora expedita reprehenderit molestiae
                culpa itaque, beatae fugit repellendus nesciunt suscipit ipsum
                totam quibusdam ducimus sapiente. Laborum consequatur modi eum
                totam laboriosam quibusdam labore excepturi aut eaque? Neque
                fugiat maiores aut.
              </p>
              <p className="text-gray-700 font-verelaRound">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, beatae omnis. Eaque inventore voluptatibus harum
                molestias dignissimos. Et aspernatur ab qui, perferendis
                explicabo beatae autem quibusdam deserunt tenetur molestias
                veniam inventore tempore, aut debitis necessitatibus cum. Ex,
                sint pariatur? Dolore facilis voluptatum, velit enim, culpa
                fugit delectus saepe nulla voluptates recusandae minima at iure!
                Quibusdam, aut eaque. Quisquam, neque! Aliquid vitae ipsa
                explicabo laboriosam maiores neque voluptas deserunt minima
                corporis.
              </p>
              <p className="text-gray-700 font-verelaRound">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut,
                ratione! Ex expedita ipsam illo ab similique molestias
                accusantium provident, ducimus, dolorum eos nihil repellat ut
                eum ullam eligendi reprehenderit mollitia.
              </p>
              <p className="text-gray-700 font-verelaRound">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                quae distinctio illum repellat ad laboriosam. Ab neque nisi
                cumque esse! Excepturi, architecto ad. Recusandae fugit rerum
                molestias dignissimos optio? Recusandae unde aliquid non minima
                blanditiis, provident ea, voluptatum consectetur iste accusamus
                officia? Natus, tenetur illum voluptatum, voluptas eos assumenda
                iste quia possimus laudantium labore aspernatur? Iste minus at
                natus pariatur consectetur quae atque sit nisi. Eaque voluptatem
                optio beatae molestiae.
              </p>
            </article>
          </section>
          <span className="font-lora  italic text-[#999] absolute top-0 right-1">1 hour ago</span>
        </div>
      </div>
  );
};
export default function PostPage() {
  return (
    <div className="w-full h-full">
      <main className="grid lg:grid-cols-[75%_1fr] gap-5 pt-10">
        <Post />
        <SideBar />
      </main>
    </div>
  );
}
