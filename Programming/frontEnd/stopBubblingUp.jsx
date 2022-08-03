export default function Hehe() {
  return (
    <div className="toClick" onClick={ev => {
      // this is the function that will be prevented from bubbling up
      alert('hei')
    }}>
      <div className="notToClick" onClick={ev => {
        // this is the function to stop the bubbling
        ev.stopPropagation()
        // when a user click this div the alert('hei') won't trigger
      }}>

      </div>
    </div>
  )
}