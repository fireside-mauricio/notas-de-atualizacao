export function Timeline() {
  return (
    <section className="bg-gray-100 text-zinc-800">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-brand-500">
              <h3 className="text-3xl font-semibold">Versão 4.0.0</h3>
              <span className="text-sm font-bold tracking-wider text-gray-400 uppercase">
                01/07/2022
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-brand-500">
                <h3 className="text-xl font-semibold tracking-wide">
                  Fluxo de operação
                </h3>
                <time className="text-xs tracking-wide text-gray-400 uppercase">
                  TMS
                </time>
                <p className="mt-3">
                  A ferramenta consiste em criar um fluxo para cada tipo de
                  operação contratada, ou seja, um passo a passo. Sua empresa
                  pode ter exatamente cada ação na hora certa para poder seguir
                  ao proximo passo até concluir o processo como um todo. <br />
                  Cada setor/operador da empresa é responsável por fazer uma ou
                  mais ações para liberar o próximo passo e assim por diante.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-brand-500">
                <h3 className="text-xl font-semibold tracking-wide">
                  Palettização
                </h3>
                <time className="text-xs tracking-wide text-gray-400 uppercase">
                  WMS
                </time>
                <p className="mt-3">
                  Para um melhor controle na entrada de mercadoria, o sistema
                  ajudará na palettização dos itens, através de parâmetros no
                  cadastro dos itens e/ou de forma manual pelo operador.
                  <br />
                  Toda entrada palletizada tem a informação exata de quantos
                  pallets foram criados, quantos itens e unidades cada pallet
                  comportou, gera etiqueta de cada item ou pallet como um todo e
                  tem o endereçamento do mesmo para futuras conferências.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-brand-500">
                <h3 className="text-xl font-semibold tracking-wide">
                  Checklist de caminhões
                </h3>
                <time className="text-xs tracking-wide text-gray-400 uppercase">
                  Controle de frota
                </time>
                <p className="mt-3">
                  Através de um aplicativo para dispoitivos mobile android, o
                  gestor de frota ou o próprio motorista pode fazer um checklist
                  completo de quantos itens sua empresa desejar.
                  <br />
                  Salve fotos e assinaturas de cada checklist e/ou item
                  conferido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
