export default function ConditionRendering () {
    let login = false;

    return (
        <>
            {login ? (
                <div>True</div>
            ) : (
                <div>False</div>
                )}
            {/*<div>*/}
            {/*    {isLoggedIn && <AdminPanel />}*/}
            {/*</div>*/}
        </>
    )
}