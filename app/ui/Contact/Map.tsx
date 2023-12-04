const Map = () => {
  return (
    <div className="w-1/2 xl:w-full">
        <iframe 
            id="inlineFrameExample"
            title="Inline Frame Example"
            width={600}
            height={650}
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik" >
        </iframe>
    </div>
  )
}

export default Map