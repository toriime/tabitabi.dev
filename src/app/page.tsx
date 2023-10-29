import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-border bg-background px-4 py-1 shadow-md backdrop-blur transition-all duration-500 hover:bg-border ">
          <p className="text-sm font-semibold magic-text">
            TabiTabi Development
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-6xl mb-10">
          Gambare Oni-chan{" "}
          <span className="magic-text-animate whitespace-nowrap">
            Arara Sayonara
          </span>
        </h1>

        <form className="flex gap-3 items-center">
          <input
            type="text"
            className="rounded-lg bg-transparent border text-white p-2.5"
            placeholder="email"
          />
          <button
            type="submit"
            className="rounded-lg relative text-white text-sm p-3 gradient "
          >
            Newsletter
          </button>
        </form>
      </div>


      <div className="box ">

      </div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro saepe
      minima voluptas sint voluptate, vel quod, tenetur aspernatur non incidunt
      nam laborum iste aut! Praesentium non nisi perspiciatis sunt ex. Iste
      ducimus sed alias quasi sapiente, laboriosam magnam quaerat, quo eum
      facere at, explicabo ab autem maiores. Ducimus sit harum libero fugit
      iusto reprehenderit accusamus numquam labore enim, quos vero. Deleniti quo
      officiis libero asperiores minus reprehenderit a assumenda iste neque
      corrupti! Ex repudiandae, ea facilis assumenda vitae quaerat, praesentium
      voluptate soluta, quas adipisci possimus facere totam rem animi libero.
      Distinctio porro quaerat, nulla officia assumenda nobis omnis maiores
      necessitatibus, commodi unde ullam facere tenetur et neque ducimus
      dignissimos eum est repellendus magni eos veritatis architecto voluptas.
      Odio, ab numquam. Aliquid a voluptatem accusamus eligendi repellat,
      repellendus fugit modi nisi quasi, pariatur itaque laborum libero in amet
      officiis debitis porro facere hic unde. Saepe laboriosam tenetur numquam
      quae accusantium quia. Aliquam perspiciatis quo id quis ipsam consequuntur
      illo non magni blanditiis quam. Quo obcaecati harum repellat nobis iure
      dolore ab nam fuga, ut unde hic, iusto voluptas excepturi quod pariatur.
      Accusantium voluptates quia illo natus laborum dolorum aliquid est
      aspernatur odio voluptatem hic, dolorem quod nam delectus suscipit at
      explicabo nulla eligendi ut, distinctio itaque. Distinctio officia rerum
      iure quia. Iure voluptatibus pariatur rerum, ad fuga earum velit? In
      ducimus nostrum voluptate obcaecati molestiae eos, reiciendis nulla
      blanditiis esse, asperiores aliquam, modi consequatur corrupti nihil
      incidunt dolorem possimus. Consequatur, soluta? Cumque fugit recusandae
      corporis commodi alias blanditiis quos quibusdam quod doloribus expedita
      enim itaque nisi similique, error saepe, mollitia repudiandae quaerat
      officia nemo delectus, aperiam praesentium reprehenderit fuga ab!
      Molestias. Maxime, provident quas aspernatur aliquam necessitatibus iure
      voluptate, totam, natus in quos quasi nulla animi illo eius quia nam
      dolore! Voluptatem eum molestias explicabo ullam nisi numquam labore et
      similique?
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-6xl mb-10">
        <span className="magic-text-animate whitespace-nowrap">
          Rezizdigus love navbar
        </span>
      </h1>
    </MaxWidthWrapper>
  );
}
